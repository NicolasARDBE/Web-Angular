import { Injectable } from '@angular/core';
import axios from 'axios';
import { Finca } from '../models/finca';

@Injectable({
  providedIn: 'root'
})
export class FincaService {
  private apiUrl = 'http://localhost:8080/fincas';

  constructor() { }

  getAllFincas(): Promise<Finca[]> {
    return axios.get<Finca[]>(this.apiUrl).then(response => {
      console.log("Fincas recibidas:", response.data);
      return response.data;
    }).catch(error => {
      console.error("Error al obtener las fincas", error);
      throw error;
    });
  }

  getFincaById(id: number): Promise<Finca> {
    return axios.get<Finca>(`${this.apiUrl}/${id}`).then(response => {
      console.log("Finca recibida:", response.data);
      return response.data;
    }).catch(error => {
      console.error("Error al obtener la finca", error);
      throw error;
    });
  }

  saveFinca(finca: Finca): Promise<Finca> {
    const url = finca.id_finca ? `${this.apiUrl}/${finca.id_finca}` : this.apiUrl;
    const method = finca.id_finca ? 'put' : 'post';

    return axios({
      method: method,
      url: url,
      data: finca
    }).then(response => {
      console.log(`Finca ${finca.id_finca ? 'actualizada' : 'guardada'}:`, response.data);
      return response.data;
    }).catch(error => {
      console.error(`Error al ${finca.id_finca ? 'actualizar' : 'guardar'} la finca`, error);
      throw error;
    });
  }

  deleteFinca(id: number): Promise<void> {
    return axios.delete(`${this.apiUrl}/${id}`).then(() => {
      console.log("Finca eliminada con éxito");
    }).catch(error => {
      console.error("Error al eliminar la finca", error);
      throw error;
    });
  }
}
