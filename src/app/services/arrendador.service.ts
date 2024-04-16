import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Arrendador } from '../models/Arrendador';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class ArrendadorService {

  constructor() { }

  getPipolsExterno(): Promise< Arrendador[] > {
    return axios.get< Arrendador[] >('http://localhost:8080/arrendadores').then(response => response.data);
  }
}