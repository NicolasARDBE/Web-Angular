import { Injectable, inject } from '@angular/core';
import axios, { AxiosRequestConfig } from 'axios';
import { Finca } from '../models/finca';
import {formatApiUrl} from "../app.config";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FincaService {

  private apiUrl = formatApiUrl("fincas");

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

  getAllFincasArrendadores(): Promise<Finca[]> {
    const config: AxiosRequestConfig = {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    };
    this.apiUrl = formatApiUrl("fincas/arrendador");
    console.log("URL:", this.apiUrl);
    return axios.get<Finca[]>(this.apiUrl, config).then(response => {
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

    const headers = {
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    };

    
    return axios({
      method: method,
      url: url,
      data: finca,
      headers: headers
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
