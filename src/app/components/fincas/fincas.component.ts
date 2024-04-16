import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { Finca } from '../../models/finca';
import { FincaService } from '../../services/finca.service';

@Component({
  selector: 'app-fincas',
  standalone: true,
  imports: [CommonModule,FormsModule], // Añade FormsModule aquí
  templateUrl: './fincas.component.html',
  styleUrls: ['./fincas.component.css']
})
export class FincaComponent implements OnInit {
  fincas: Finca[] = [];
  finca: Finca = new Finca();
  editing: boolean = false;

  constructor(private fincaService: FincaService) {}

  ngOnInit() {
    this.getFincas();
  }

  resetFinca() {
    this.finca = new Finca(); // Crea una nueva instancia de Finca
    this.editing = false;    // Actualiza el estado de edición
  }

  getFincas() {
    this.fincaService.getAllFincas().then(data => {
      this.fincas = data;
    }).catch(error => console.error('Error fetching fincas:', error));
  }

  saveFinca() {
    this.fincaService.saveFinca(this.finca).then(() => {
      this.getFincas(); // Refresh the list
      this.finca = new Finca(); // Reset the form
      this.editing = false;
    }).catch(error => console.error('Error saving finca:', error));
  }

  editFinca(finca: Finca) {
    this.finca = { ...finca };
    this.editing = true;
  }

  deleteFinca(id: number | null | undefined) {
    if (id !== null && id !== undefined) { // Asegura que id no sea null ni undefined
      this.fincaService.deleteFinca(id).then(() => {
        this.getFincas(); // Refresca la lista
      }).catch(error => console.error('Error deleting finca:', error));
    }
  }
  
}
