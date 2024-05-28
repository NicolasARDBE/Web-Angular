import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { Solicitud } from '../../models/solicitud';
import { SolicitudService } from '../../services/solicitud.service';
import { Router } from '@angular/router';
import { Estado } from '../../enums/estado.enum';

@Component({
  selector: 'app-solicitud',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './solicitud.component.html',
  styleUrl: './solicitud.component.css'
})
export class SolicitudComponent {
  solicitudPagada: boolean = false;
  solicitudes: Solicitud[] = [];
  solicitud: Solicitud = new Solicitud();
  editing: boolean = false;

  constructor(private solicitudService: SolicitudService, private router: Router) { }

  ngOnInit() {
    this.getSolicitudes();
  }

  resetSolicitud() {
    this.solicitud = new Solicitud();
    this.editing = false;
  }

  getSolicitudes() {
    this.solicitudService.getAllSolicitudesArrendatarios().then(data => {
      this.solicitudes = data;
    }).catch((error: any) => console.error('Error fetching solicitudes:', error));
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

  pagarSolicitud(solicitud: any) {
    if(solicitud.estado !== "FINALIZADA"){
      this.router.navigate(['/pagina-pago', solicitud.idSolicitud]);
    }
  }
}
