import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaludadorComponent } from './saludador/saludador.component';
import { OtresComponent } from './otres/otres.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludadorComponent,
    OtresComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
