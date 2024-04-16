import { Component } from '@angular/core';
import { Arrendador } from '../../../models/Arrendador';
import { ArrendadorService } from '../../../services/arrendador.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-list-arrendador',
  templateUrl: './list-arrendador.component.html',
  standalone: true,
  styleUrls: ['./list-arrendador.component.css'],
  imports: [CommonModule, RouterOutlet]
})

export class ListArrendadorComponent {

  arrendadores: Arrendador[] = [];
  arrendador: Arrendador;

  constructor(
    private arrendadorService: ArrendadorService,
  ){
    this.arrendador = new Arrendador();
  }

  ngOnInit(): void {
    this.cargarArrendadorService();
  }

  cargarArrendadorService(){
    // Externo
    this.arrendadorService.getPipolsExterno().then((post) => {
      console.log(post);
      this.arrendadores = post;
    }).catch((error) => {
      console.error(error);
    });
  }

  cambiarArrendador( event: Event, arrendador: Arrendador ){
    event.preventDefault();
    this.arrendador = arrendador;
  }
}