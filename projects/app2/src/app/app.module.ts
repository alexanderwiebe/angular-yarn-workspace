import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MfeSharedModule } from './mfe-shared/mfe-shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MfeSharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
