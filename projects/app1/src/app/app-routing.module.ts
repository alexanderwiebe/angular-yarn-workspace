import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'mfe',
  //   loadChildren: () =>
  //     import('./mfe-shared/mfe-shared.module').then((m) => m.MfeSharedModule),
  // },
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
