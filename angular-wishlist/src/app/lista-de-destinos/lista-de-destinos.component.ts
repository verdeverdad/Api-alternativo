import { Component, OnInit } from '@angular/core';
import { DestinoViajes } from '../models/destino.viaje.models';

@Component({
  selector: 'app-lista-de-destinos',
  templateUrl: './lista-de-destinos.component.html',
  styleUrls: ['./lista-de-destinos.component.css']
})
export class ListaDeDestinosComponent implements OnInit {
  destinos: DestinoViajes[];
  constructor() {
    this.destinos = [];
   }

  ngOnInit() {
  }

  guardar(nombre: string, url: string): boolean {
    this.destinos.push(new DestinoViajes(nombre, url));
    console.log(this.destinos);
   
    return false;
  }
}
