import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalAComponent } from './components/local-a/local-a.component';
import { LocalBComponent } from './components/local-b/local-b.component';

const routes: Routes = [
  {
    path: 'a',
    component: LocalAComponent,
  },
  {
    path: 'b',
    component: LocalBComponent,
  },
];

@NgModule({
  declarations: [LocalAComponent, LocalBComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class LocalModule {}
