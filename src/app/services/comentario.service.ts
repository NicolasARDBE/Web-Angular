import { Injectable } from '@angular/core';
import axios from 'axios';
import { Comentario } from '../models/comentario';
import { formatApiUrl } from "../app.config";

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  private apiUrl = formatApiUrl("comentarios");

  constructor() { }

  getAllComentarios(): Promise<Comentario[]> {
    return axios.get<Comentario[]>(this.apiUrl).then(response => {
      console.log("Comentarios recibidos:", response.data);
      return response.data;
    }).catch(error => {
      console.error("Error al obtener los comentarios", error);
      throw error;
    });
  }

  getComentariosBySolicitud(idFinca: number): Promise<Comentario[]> {
    return axios.get<Comentario[]>(`${this.apiUrl}/finca/${idFinca}`).then(response => {
      console.log(`Comentarios recibidos para finca ${idFinca}:`, response.data);
      return response.data;
    }).catch(error => {
      console.error(`Error al obtener los comentarios para finca ${idFinca}`, error);
      throw error;
    });
  }

  saveComentario(comentario: Comentario, idSolicitud: number ): Promise<Comentario> {
    const url = comentario.id_comentario ? `${this.apiUrl}/${comentario.id_comentario}` : this.apiUrl;
    const method = comentario.id_comentario ? 'put' : 'post';

    console.log("Se le envia el idSolicitud: " + idSolicitud);

    const headers = {
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
      'idSolicitud': idSolicitud
    };

    
    return axios({
      method: method,
      url: url,
      data: comentario,
      headers: headers
    }).then(response => {
      console.log(`Comentario ${comentario.id_comentario ? 'actualizada' : 'guardada'}:`, response.data);
      return response.data;
    }).catch(error => {
      console.error(`Error al ${comentario.id_comentario ? 'actualizar' : 'guardar'} el pago`, error);
      throw error;
    });
  }

  deleteComentario(id: number): Promise<void> {
    return axios.delete(`${this.apiUrl}/${id}`).then(() => {
      console.log("Comentario eliminada con éxito");
    }).catch(error => {
      console.error("Error al eliminar el comentario", error);
      throw error;
    });
  }
}
