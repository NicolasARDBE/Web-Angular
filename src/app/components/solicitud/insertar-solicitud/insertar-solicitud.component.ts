import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { Solicitud } from '../../../models/solicitud';
import { SolicitudService } from '../../../services/solicitud.service';

@Component({
  selector: 'app-insertar-solicitud',
  standalone: true,
  imports: [
    CommonModule,FormsModule
  ],
  templateUrl: './insertar-solicitud.component.html',
  styleUrls: ['./insertar-solicitud.component.css']
})
export class InsertarSolicitudComponent implements OnInit {
  solicitudes: Solicitud[] = [];
  solicitud: Solicitud = new Solicitud();
  editing: boolean = false;

  constructor(private solicitudService: SolicitudService) { }

  ngOnInit() {
    this.getSolicitudes();
  }

  resetSolicitud() {
    this.solicitud = new Solicitud();
    this.editing = false;
  }

  getSolicitudes() {
    this.solicitudService.getAllSolicitudes().then(data => {
      this.solicitudes = data;
    }).catch(error => console.error('Error fetching solicitudes:', error));
  }

  saveSolicitud() {
    this.solicitudService.saveSolicitud(this.solicitud).then(() => {
      this.getSolicitudes();
      this.solicitud = new Solicitud();
      this.editing = false;
    }).catch(error => console.error('Error saving solicitud:', error));
  }

  editSolicitud(solicitud: Solicitud) {
    this.solicitud = { ...solicitud };
    this.editing = true;
  }

  deleteSolicitud(id: number | null | undefined) {
    if (id !== null && id !== undefined) {
      this.solicitudService.deleteSolicitud(id).then(() => {
        this.getSolicitudes();
      }).catch(error => console.error('Error deleting solicitud:', error));
    }
  }
}
