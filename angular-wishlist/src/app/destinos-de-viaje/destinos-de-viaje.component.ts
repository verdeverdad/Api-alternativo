import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-destinos-de-viaje',
  templateUrl: './destinos-de-viaje.component.html',
  styleUrls: ['./destinos-de-viaje.component.css']
})
export class DestinosDeViajeComponent implements OnInit {
  @Input() nombre: string;
  constructor() {
    this.nombre = 'destinos';
   }

  ngOnInit(): void {
  }

}
