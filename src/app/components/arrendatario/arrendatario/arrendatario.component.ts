import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { Arrendatario } from '../../../models/arrendatario';
import {ArrendatarioService} from '../../../services/arrendatario.service';

@Component({
  selector: 'app-arrendatario',
  standalone: true,
    imports: [
      CommonModule,FormsModule
    ],
  templateUrl: './arrendatario.component.html',
  styleUrl: './arrendatario.component.css'
})
export class ArrendatarioComponent implements OnInit{
  arrendatarios: Arrendatario[] = [];
  arrendatario: Arrendatario = new Arrendatario();
  editing: boolean = false;

  constructor(private ArrendatarioService: ArrendatarioService) {}

  ngOnInit() {
    this.getArrendatarios();
  }

  resetArrendatario() {
    this.arrendatario = new Arrendatario(); // Crea una nueva instancia de Arrendatario
    this.editing = false;    // Actualiza el estado de edición
  }

  getArrendatarios() {
    this.ArrendatarioService.getAllArrendatarios().then(data => {
      this.arrendatarios = data;
    }).catch(error => console.error('Error fetching Arrendatarios:', error));
  }

  saveArrendatario() {
    this.ArrendatarioService.saveArrendatario(this.arrendatario).then(() => {
      this.getArrendatarios(); // Refresh the list
      this.arrendatario = new Arrendatario(); // Reset the form
      this.editing = false;
    }).catch(error => console.error('Error saving Arrendatario:', error));
  }

  editArrendatario(arrendatario: Arrendatario) {
    this.arrendatario = { ...arrendatario };
    this.editing = true;
  }

  deleteArrendatario(id: number | null | undefined) {
    if (id !== null && id !== undefined) { // Asegura que id no sea null ni undefined
      this.ArrendatarioService.deleteArrendatario(id).then(() => {
        this.getArrendatarios(); // Refresca la lista
      }).catch(error => console.error('Error deleting Arrendatario:', error));
    }
  }
}
