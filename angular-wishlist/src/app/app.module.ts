import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DestinosDeViajeComponent } from './destinos-de-viaje/destinos-de-viaje.component';
import { ListaDeDestinosComponent } from './lista-de-destinos/lista-de-destinos.component';

@NgModule({
  declarations: [
    AppComponent,
    DestinosDeViajeComponent,
    ListaDeDestinosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
