import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpService } from './http.Service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
