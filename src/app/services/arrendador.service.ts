import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Arrendador } from '../models/Arrendador';

@Injectable({
  providedIn: 'root'
})

export class ArrendadorService {
  private apiUrl = 'http://localhost:8080/arrendadores';

  constructor(private http: HttpClient) { }

  getArrendadores(): Observable<Arrendador[]> {
    return this.http.get<Arrendador[]>(this.apiUrl);
  }
}