import { Injectable } from '@angular/core';
import axios from 'axios';
import { Pago } from '../models/pago';
import { formatApiUrl } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class PagoService {

  private apiUrl = formatApiUrl("fincas");

  constructor() { }

  getAllPagos(): Promise<Pago[]> {
    return axios.get<Pago[]>(this.apiUrl).then(response => {
      console.log("Pagos recibidas:", response.data);
      return response.data;
    }).catch(error => {
      console.error("Error al obtener los pagos", error);
      throw error;
    });
  }

  getPagoById(id: number): Promise<Pago> {
    return axios.get<Pago>(`${this.apiUrl}/${id}`).then(response => {
      console.log("Finca recibida:", response.data);
      return response.data;
    }).catch(error => {
      console.error("Error al obtener la finca", error);
      throw error;
    });
  }

  savePago(pago: Pago): Promise<Pago> {
    const url = pago.id_pago ? `${this.apiUrl}/${pago.id_pago}` : this.apiUrl;
    const method = pago.id_pago ? 'put' : 'post';

    const headers = {
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    };

    
    return axios({
      method: method,
      url: url,
      data: pago,
      headers: headers
    }).then(response => {
      console.log(`Finca ${pago.id_pago ? 'actualizada' : 'guardada'}:`, response.data);
      return response.data;
    }).catch(error => {
      console.error(`Error al ${pago.id_pago ? 'actualizar' : 'guardar'} la finca`, error);
      throw error;
    });
  }

  deletePago(id: number): Promise<void> {
    return axios.delete(`${this.apiUrl}/${id}`).then(() => {
      console.log("Finca eliminada con éxito");
    }).catch(error => {
      console.error("Error al eliminar la finca", error);
      throw error;
    });
  }
}
