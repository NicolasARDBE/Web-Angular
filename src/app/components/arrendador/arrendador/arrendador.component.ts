import { Component, Input } from '@angular/core';
import { Arrendador } from '../../../models/Arrendador';

@Component({
  selector: 'app-arrendador',
  standalone: true,
  imports: [],
  templateUrl: './arrendador.component.html',
  styleUrl: './arrendador.component.css'
})
export class ArrendadorComponent {
  @Input() arrendador22:Arrendador;
  constructor(){
    this.arrendador22 = new Arrendador();
  }
}
