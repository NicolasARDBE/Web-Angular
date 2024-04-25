import { Injectable } from '@angular/core';
import axios from 'axios';
import { Arrendatario } from '../models/arrendatario';
import { formatApiUrl } from '../app.config';
import {Finca} from "../models/finca";
import {Arrendador} from "../models/arrendador";

@Injectable({
  providedIn: 'root'
})
export class ArrendatarioService {

  private apiUrl = formatApiUrl("arrendatarios");


  constructor() { }

  getAllArrendatarios(): Promise<Arrendatario[]> {
    return axios.get<Arrendatario[]>(this.apiUrl).then(response => {
      console.log("Arrendatarios recibidas:", response.data);
      return response.data;
    }).catch(error => {
      console.error("Error al obtener los arrendatarios", error);
      throw error;
    });
  }


  getArrendatarioById(id: number): Promise<Arrendatario> {
    return axios.get<Arrendatario>(`${this.apiUrl}/${id}`).then(response => {
      console.log("Arrendatario recibido:", response.data);
      return response.data;
    }).catch(error => {
      console.error("Error al obtener el Arrendatario", error);
      throw error;
    });
  }

  saveArrendatario(arrendatario: Arrendatario): Promise<Arrendatario> {
    const url = arrendatario.id_arrendatario ? `${this.apiUrl}/${arrendatario.id_arrendatario}` : this.apiUrl;
    const method = arrendatario.id_arrendatario ? 'put' : 'post';

    return axios({
      method: method,
      url: url,
      data: arrendatario
    }).then(response => {
      console.log(`Finca ${arrendatario.id_arrendatario ? 'actualizada' : 'guardada'}:`, response.data);
      return response.data;
    }).catch(error => {
      console.error(`Error al ${arrendatario.id_arrendatario ? 'actualizar' : 'guardar'} la finca`, error);
      throw error;
    });
  }

  deleteArrendatario(id: number): Promise<void> {
    return axios.delete(`${this.apiUrl}/${id}`).then(() => {
      console.log("Arrendatario eliminado con éxito");
    }).catch(error => {
      console.error("Error al eliminar el arrendatario", error);
      throw error;
    });
  }
}
