import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import axios from 'axios';
import { Arrendador } from '../models/Arrendador';
import { InsertarArrendadorComponent } from '../components/arrendador/insertar-arrendador/insertar-arrendador.component';
import { formatApiUrl } from '../app.config';



@Injectable({
  providedIn: 'root'
})

export class ArrendadorService {

  constructor() { }

  getPipolsExterno(): Promise< Arrendador[] > {
    const url = formatApiUrl('arrendadores');
    return axios.get< Arrendador[] >(url).then(response => response.data);
  }

  obtenerDetallesArrendador(id: number): Promise<Arrendador> {
    const url = formatApiUrl(`arrendadores/${id}`);
    return axios.get<Arrendador>(url).then(response => response.data);
  }

  actualizarArrendador(id: number, arrendador: Arrendador): Promise<Arrendador> {
    const url = formatApiUrl(`arrendadores/${id}`);
    return axios.put<Arrendador>(url, arrendador).then(response => response.data);
  }
  insertarArrendador(arrendador: Arrendador): Promise<Arrendador> {
    const url = formatApiUrl('arrendadores/crearArrendador');
    return axios.post<Arrendador>(url, arrendador).then(response => response.data);
  }

  eliminarArrendador(id: number): Promise<void> {
    const url = formatApiUrl(`arrendadores/${id}`);
    return axios.delete<void>(url).then(response => {
      console.log('Arrendador eliminado correctamente');
    }).catch(error => {
      console.error('Error al eliminar arrendador:', error);
      throw error; // Puedes manejar el error según tus necesidades
    });
  }

}