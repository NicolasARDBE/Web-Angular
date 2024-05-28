import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { Pago } from '../../../models/pago';
import { PagoService } from '../../../services/pago.service';



@Component({
  selector: 'app-agregar-pago',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './agregar-pago.component.html',
  styleUrl: './agregar-pago.component.css'
})
export class AgregarPagoComponent {
  pago: Pago = new Pago();
  editing: boolean = false;

  constructor(private pagoService: PagoService) {}

  resetPago() {
    this.pago = new Pago(); // Crea una nueva instancia de Finca
    this.editing = false;    // Actualiza el estado de edición
  }

  savePago() {
    this.pagoService.savePago(this.pago).then(() => {
      console.log(localStorage.getItem('token'))
      this.pago = new Pago(); // Reset the form
      this.editing = false;
    }).catch(error => console.error('Error saving finca:', error));
  }

  editPago(pago: Pago) {
    this.pago = { ...pago };
    this.editing = true;
  }
}
