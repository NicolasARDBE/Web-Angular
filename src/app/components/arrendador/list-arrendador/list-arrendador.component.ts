import { Component, OnInit } from '@angular/core';
import { ArrendadorService } from '../../../services/arrendador.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Arrendador } from '../../../models/arrendador';
import { FormsModule } from '@angular/forms'; // Importa FormsModule


@Component({
  selector: 'app-list-arrendador',
  templateUrl: './list-arrendador.component.html',
  standalone: true,
  styleUrls: ['./list-arrendador.component.css'],
  imports: [CommonModule, RouterOutlet, FormsModule]
})

export class ListArrendadorComponent implements OnInit{

  arrendadores: Arrendador[] = [];
  arrendador: Arrendador = new Arrendador();
  editing: boolean = false;

  constructor(
    private arrendadorService: ArrendadorService,){
    this.arrendador = new Arrendador();
  }

  ngOnInit(): void {
    this.cargarArrendadorService();
  }

  cargarArrendadorService(){
    // Externo
    this.arrendadorService.getAllArrendadores().then((data) => {
      console.log(data);
      this.arrendadores = data;
    }).catch(error => console.error('Error fetching arrendadores:', error));
  }

  cambiarArrendador( event: Event, arrendador: Arrendador ){
    event.preventDefault();
    this.arrendador = arrendador;
  }
}
