import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MfeSharedComponent } from './components/mfe-shared/mfe-shared.component';

const routes: Routes = [
  {
    path: '',
    component: MfeSharedComponent,
  },
];
@NgModule({
  declarations: [MfeSharedComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [MfeSharedComponent],
})
export class MfeSharedModule {}
