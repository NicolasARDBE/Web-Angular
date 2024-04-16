import { Component } from '@angular/core';
import { ArrendadorService } from '../../../services/arrendador.service';

@Component({
  selector: 'app-eliminar-arrendador',
  standalone: true,
  imports: [],
  templateUrl: './eliminar-arrendador.component.html',
  styleUrl: './eliminar-arrendador.component.css'
})
export class EliminarArrendadorComponent {

  constructor(private arrendadorService: ArrendadorService) { }

  handleClick(id: string) {
    this.eliminarArrendador(parseInt(id));
  }

  eliminarArrendador(id: number) {
    this.arrendadorService.eliminarArrendador(id).then(() => {
      console.log('Arrendador eliminado correctamente');
      // Aquí puedes actualizar la lista de arrendadores o realizar otras acciones necesarias después de eliminar el arrendador
    }).catch(error => {
      console.error('Error al eliminar arrendador:', error);
      // Maneja el error según tus necesidades
    });
  }
}