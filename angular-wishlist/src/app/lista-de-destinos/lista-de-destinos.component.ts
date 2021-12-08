import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-de-destinos',
  templateUrl: './lista-de-destinos.component.html',
  styleUrls: ['./lista-de-destinos.component.css']
})
export class ListaDeDestinosComponent implements OnInit {
  destinos: string[];
  constructor() {
    this.destinos = ['Barcelona', 'Islas Canarias', 'Australia', 'Baja California', 'París', 'Mexico']
   }

  ngOnInit(): void {
  }

}
