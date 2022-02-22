import dep from 'package.json';
import { Configuration, container } from 'webpack';

export const webpackConfig: Configuration = {
  output: {
    publicPath: 'http://localhost:4202/',
    uniqueName: 'mfe',
  },
  experiments: {
    topLevelAwait: true,
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new container.ModuleFederationPlugin({
      // name: 'mfe',
      // library: { type: 'var', name: 'mfe' },
      // filename: 'mfe.js',
      // exposes: {
      //   MfeSharedModule: './src/app/mfe-shared/mfe-shared.module.ts',
      // },
      shared: {
        '@angular/core': {
          eager: true,
          singleton: true,
          strictVersion: true,
          requiredVersion: dep.dependencies['@angular/router'],
        },
        '@angular/common': {
          eager: true,
          singleton: true,
          strictVersion: true,
          requiredVersion: dep.dependencies['@angular/common'],
        },
        '@angular/router': {
          eager: true,
          singleton: true,
          strictVersion: true,
          requiredVersion: dep.dependencies['@angular/router'],
        },
      },
    }),
  ],
};

export default webpackConfig;
