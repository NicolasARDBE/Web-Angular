import { Component } from '@angular/core';
import { Arrendador } from '../../../models/arrendador';
import { FormsModule } from '@angular/forms';
import { ArrendadorService } from '../../../services/arrendador.service';

@Component({
  selector: 'app-insertar-arrendador',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './insertar-arrendador.component.html',
  styleUrl: './insertar-arrendador.component.css'
})
export class InsertarArrendadorComponent {

  arrendador: Arrendador = {}
  constructor(private arrendadorService: ArrendadorService,){
    this.arrendador = new Arrendador();
  }

  insertarArrendador(){
    this.arrendadorService.insertarArrendador(this.arrendador).then(response => {
      window.location.href = "/";
    }, error => {
      console.error('Error:', error);
    });
  }

}
