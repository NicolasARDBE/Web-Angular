import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { Finca } from '../../../models/finca';
import { FincaService } from '../../../services/finca.service';

@Component({
  selector: 'app-finca-arrendador',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './finca-arrendador.component.html',
  styleUrl: './finca-arrendador.component.css'
})
export class FincaArrendadorComponent implements OnInit {
  fincas: Finca[] = [];
  finca: Finca = new Finca();
  editing: boolean = false;

  // Lista de imágenes para las fincas
  private images: string[] = [
    'assets/finca2.jpg',
    'assets/finca3.jpeg',
    'assets/foto4.jpg',
    'assets/foto5.jpg',
    'assets/finca6.jpg',
    'assets/finca7.jpg'
  ];

  constructor(private fincaService: FincaService) {}

  ngOnInit() {
    this.getFincas();
  }

  resetFinca() {
    
    this.finca = new Finca(); // Crea una nueva instancia de Finca
    this.editing = false;    // Actualiza el estado de edición
  }

  getFincas() {
    this.fincaService.getAllFincasArrendadores().then(data => {
      this.fincas = data;
    }).catch(error => console.error('Error fetching fincas:', error));
  }

  saveFinca() {
    this.fincaService.saveFinca(this.finca).then(() => {
      console.log(localStorage.getItem('token'))
      this.getFincas(); // Refresca la lista
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

  // Método para obtener la imagen correspondiente para cada finca
  getImageForFinca(index: number): string {
    return this.images[index % this.images.length];
  }

}
