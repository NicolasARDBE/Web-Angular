import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { Pago } from '../../../models/pago';
import { PagoService } from '../../../services/pago.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-agregar-pago',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './agregar-pago.component.html',
  styleUrl: './agregar-pago.component.css'
})
export class AgregarPagoComponent implements OnInit {

  idSolicitud!: number;
  pago: Pago = new Pago();
  editing: boolean = false;

  constructor(private pagoService: PagoService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idSolicitud = + params['id']; // El '+' convierte el string a número
      // Ahora puedes usar this.idSolicitud para cargar los datos necesarios para el pago
      console.log('ID de la solicitud:', this.idSolicitud);
    });
  }

  resetPago() {
    this.pago = new Pago(); // Crea una nueva instancia de Finca
    this.editing = false;    // Actualiza el estado de edición
  }

  savePago() {
    this.pagoService.savePago(this.pago, this.idSolicitud).then(() => {
      console.log(localStorage.getItem('token'))
      this.pago = new Pago(); // Reset the form
      this.editing = false;
    }).catch(error => console.error('Error saving pago:', error));
  }

  editPago(pago: Pago) {
    this.pago = { ...pago };
    this.editing = true;
  }

  
}
