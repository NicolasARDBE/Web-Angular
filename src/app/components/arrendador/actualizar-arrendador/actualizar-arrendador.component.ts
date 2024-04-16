import { Component, NgModule } from '@angular/core';
import { ArrendadorService } from '../../../services/arrendador.service';
import { CommonModule } from '@angular/common';
import { Arrendador } from '../../../models/Arrendador';


@Component({
  selector: 'app-actualizar-arrendador',
  standalone: true,
  imports: [],
  templateUrl: './actualizar-arrendador.component.html',
  styleUrl: './actualizar-arrendador.component.css'
})
export class ActualizarArrendadorComponent {

  arrendador: Arrendador = {};

  constructor(private arrendadorService: ArrendadorService) { }

  handleClick(id: string, nombre: string, apellido: string, correo: string) {
    this.buscarArrendador(id, nombre, apellido, correo);
  }

  buscarArrendador(id: string, nombre: string, apellido: string, correo: string): Arrendador {
    let arrendador = new Arrendador(parseInt(id), nombre, apellido, correo);
    this.arrendadorService.actualizarArrendador(Number(id), arrendador).then((arrendador) => {
      this.arrendador = arrendador;
    }).catch((error) => {
      console.error(error);
    });
    return arrendador;
  }
}