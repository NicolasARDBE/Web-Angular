import { Injectable } from '@angular/core';
import axios, { AxiosRequestConfig } from 'axios';
import { Solicitud } from '../models/solicitud';
import { formatApiUrl } from "../app.config";

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  private apiUrl = formatApiUrl("solicitudes");
  constructor() { }

  getAllSolicitudes(): Promise<Solicitud[]> {
    return axios.get<Solicitud[]>(this.apiUrl).then(response => {
      console.log("Solicitudes recibidas:", response.data);
      return response.data;
    }).catch(error => {
      console.error("Error al obtener las solicitudes", error);
      throw error;
    });
  }

  getAllSolicitudesArrendatarios(): Promise<Solicitud[]> {
    const config: AxiosRequestConfig = {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    };
    const apiUrlGET = formatApiUrl("solicitudes/arrendatario");
    return axios.get<Solicitud[]>(apiUrlGET, config).then(response => {
      console.log("Solicitudes recibidas:", response.data);
      return response.data;
    }).catch(error => {
      console.error("Error al obtener las solicitudes", error);
      throw error;
    });
  }

  saveSolicitud(solicitud: Solicitud): Promise<Solicitud> {
    const url = solicitud.idSolicitud ? `${this.apiUrl}/${solicitud.idSolicitud}` : this.apiUrl;
    const method = solicitud.idSolicitud ? 'put' : 'post';

    return axios({
      method: method,
      url: url,
      data: solicitud
    }).then(response => {
      console.log(`Solicitud ${solicitud.idSolicitud ? 'actualizada' : 'guardada'}:`, response.data);
      return response.data;
    }).catch(error => {
      console.error(`Error al ${solicitud.idSolicitud ? 'actualizar' : 'guardar'} la solicitud`, error);
      throw error;
    });
  }

  deleteSolicitud(id: number): Promise<void> {
    return axios.delete(`${this.apiUrl}/${id}`).then(() => {
      console.log("Solicitud eliminada con éxito");
    }).catch(error => {
      console.error("Error al eliminar la solicitud", error);
      throw error;
    });
  }
}
