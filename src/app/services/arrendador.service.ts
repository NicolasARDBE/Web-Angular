import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import axios from 'axios';
import { Arrendador } from '../models/Arrendador';
import { InsertarArrendadorComponent } from '../components/arrendador/insertar-arrendador/insertar-arrendador.component';
import { formatApiUrl } from '../app.config';
import {Finca} from "../models/finca";



@Injectable({
  providedIn: 'root'
})

export class ArrendadorService {

  private apiUrl = 'http://localhost:8080/arrendadores';

  constructor() { }

  getAllArrendadores(): Promise<Arrendador[]> {
    return axios.get<Arrendador[]>(this.apiUrl).then(response => {
      console.log("Arrendadores recibidos:", response.data);
      return response.data;
    }).catch(error => {
      console.error("Error al obtener los arrendadores", error);
      throw error;
    });
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


  saveArrendador(arrendador: Arrendador): Promise<Arrendador> {
    const url = arrendador.id_arrendador ? `${this.apiUrl}/${arrendador.id_arrendador}` : this.apiUrl;
    const method = arrendador.id_arrendador ? 'put' : 'post';

    return axios({
      method: method,
      url: url,
      data: arrendador
    }).then(response => {
      console.log(`Finca ${arrendador.id_arrendador ? 'actualizada' : 'guardada'}:`, response.data);
      return response.data;
    }).catch(error => {
      console.error(`Error al ${arrendador.id_arrendador ? 'actualizar' : 'guardar'} la finca`, error);
      throw error;
    });
  }

}
