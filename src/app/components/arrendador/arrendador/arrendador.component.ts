import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { Arrendador } from '../../../models/arrendador';
import { ArrendadorService } from '../../../services/arrendador.service';
import {Finca} from "../../../models/finca";

@Component({
  selector: 'app-arrendador',
  standalone: true,
    imports: [
      CommonModule,FormsModule
    ],
  templateUrl: './arrendador.component.html',
  styleUrl: './arrendador.component.css'
})
export class ArrendadorComponent implements OnInit {
  arrendadores: Arrendador[] = [];
  arrendador: Arrendador = new Arrendador();
  editing: boolean = false;

  constructor(private arrendadorService: ArrendadorService) {}
  ngOnInit() {
    this.getArrendadores();
  }

  resetArrendador() {
    this.arrendador = new Arrendador(); // Crea una nueva instancia de Finca
    this.editing = false;    // Actualiza el estado de edición
  }


  getArrendadores() {
    this.arrendadorService.getAllArrendadores().then(data => {
      this.arrendadores = data;
    }).catch(error => console.error('Error fetching fincas:', error));
  }

  saveArrendador() {
    this.arrendadorService.saveArrendador(this.arrendador).then(() => {
      this.getArrendadores(); // Refresh the list
      this.arrendador = new Arrendador(); // Reset the form
      this.editing = false;
    }).catch(error => console.error('Error saving arrendador:', error));
  }

  editArrendador(arrendador: Arrendador) {
    this.arrendador = { ...arrendador };
    this.editing = true;
  }

  deleteArrendador(id: number | null | undefined) {
    if (id !== null && id !== undefined) { // Asegura que id no sea null ni undefined
      this.arrendadorService.eliminarArrendador(id).then(() => {
        this.getArrendadores(); // Refresca la lista
      }).catch(error => console.error('Error deleting finca:', error));
    }
  }
}
