import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { DestinoViajes } from '../models/destino.viaje.models';


@Component({
  selector: 'app-destinos-de-viaje',
  templateUrl: './destinos-de-viaje.component.html',
  styleUrls: ['./destinos-de-viaje.component.css']
})
export class DestinosDeViajeComponent implements OnInit {
  @Input()
  destinos!: DestinoViajes;
  constructor() {}
  @HostBinding('attr.class') cssClass = 'col-md-4';
  
  ngOnInit() {
  }

}
