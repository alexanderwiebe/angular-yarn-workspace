import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileType, MfeUtil } from 'utils';

export const mfe = new MfeUtil();

const routes: Routes = [
  {
    path: 'mfe',
    loadChildren: () =>
      mfe
        .loadRemoteFile({
          remoteName: 'mfe',
          remoteEntry: `http://localhost:4202/mfe.js`,
          exposedFile: 'MfeSharedModule',
          exposeFileType: FileType.Module,
        })
        .then((m) => m.MfeSharedModule),
  },
  {
    path: 'local',
    loadChildren: () =>
      import('./local/local.module').then((m) => m.LocalModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
