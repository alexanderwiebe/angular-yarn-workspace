import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalAComponent } from './components/local-a/local-a.component';
import { LocalBComponent } from './components/local-b/local-b.component';



@NgModule({
  declarations: [
    LocalAComponent,
    LocalBComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LocalModule { }
