import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { Finca } from '../../models/finca';
import { FincaService } from '../../services/finca.service';
import { SolicitudService } from '../../services/solicitud.service';
import { Solicitud } from '../../models/solicitud';

@Component({
  selector: 'app-fincas',
  standalone: true,
  imports: [CommonModule, FormsModule], // Añade FormsModule aquí
  templateUrl: './fincas.component.html',
  styleUrls: ['./fincas.component.css']
})
export class FincaComponent implements OnInit {

  fincas: Finca[] = [];
  finca: Finca = new Finca();
  editing: boolean = false;
  userType: string | undefined;

  // Lista de imágenes para las fincas
  private images: string[] = [
    'assets/finca2.jpg',
    'assets/finca3.jpeg',
    'assets/foto4.jpg',
    'assets/foto5.jpg',
    'assets/finca6.jpg',
    'assets/finca7.jpg'
  ];

  constructor(private fincaService: FincaService, private solicitudService: SolicitudService, private router: Router) {}

  ngOnInit() {
    this.getFincas();
    const user = localStorage.getItem('user');
    if (user) {
      const parsedUser = JSON.parse(user);
      this.userType = parsedUser.tipo;
    }
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

  // Método para obtener la imagen correspondiente para cada finca
  getImageForFinca(index: number): string {
    return this.images[index % this.images.length];
  }

  // Método para solicitar una finca
  solicitarFinca(finca: Finca) {
    const user = localStorage.getItem('user');
    if (user) {
      const parsedUser = JSON.parse(user);
      const solicitud = new Solicitud();
      solicitud.idArrendatario = parsedUser.id;
      solicitud.idFinca = finca.id_finca;
      solicitud.fecha = new Date().toISOString().split('T')[0]; // Asigna la fecha actual en formato YYYY-MM-DD
      this.solicitudService.saveSolicitud(solicitud).then(() => {
        alert('Solicitud creada correctamente.');
      }).catch(error => console.error('Error creando solicitud:', error));
    }
  }

  // Método para navegar a la página de comentarios
  verComentarios(finca: Finca) {
    this.router.navigate(['/comentarios', finca.id_finca]);
  }
  
}
