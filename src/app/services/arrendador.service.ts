import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import axios from 'axios';
import { Arrendador } from '../models/Arrendador';

@Injectable({
  providedIn: 'root'
})

export class ArrendadorService {

  constructor() { }

  getPipolsExterno(): Promise< Arrendador[] > {
    return axios.get< Arrendador[] >('http://localhost:8080/arrendadores').then(response => response.data);
  }

  obtenerDetallesArrendador(id: number): Promise<Arrendador> {
    return axios.get<Arrendador>(`http://localhost:8080/arrendadores/${id}`).then(response => response.data);
  }

  actualizarArrendador(id: number, arrendador: Arrendador): Promise<Arrendador> {
    return axios.put<Arrendador>(`http://localhost:8080/arrendadores/${id}`, arrendador).then(response => response.data);
  }

}