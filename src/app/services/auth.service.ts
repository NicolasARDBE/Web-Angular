import { Injectable } from '@angular/core';
import axios from 'axios';
import { User } from '../models/user';
import { formatApiUrl } from '../app.config';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private arrendatariosUrl = formatApiUrl('arrendatarios/crearArrendatario');
  private arrendadoresUrl = formatApiUrl('arrendadores/crearArrendador');

  private getCsrfToken(): string {
    const match = document.cookie.match(new RegExp('(^| )XSRF-TOKEN=([^;]+)'));
    return match ? match[2] : '';
  }

  async registerArrendatario(arrendatario: User): Promise<any> {
    try {
      const headers = { 'X-XSRF-TOKEN': this.getCsrfToken() };
      const response = await axios.post(this.arrendatariosUrl, arrendatario, { headers });
      return response.data;
    } catch (error) {
      console.error('Error registrando arrendatario:', error);
      throw error;
    }
  }

  async registerArrendador(arrendador: User): Promise<any> {
    try {
      const headers = { 'X-XSRF-TOKEN': this.getCsrfToken() };
      const response = await axios.post(this.arrendadoresUrl, arrendador, { headers });
      return response.data;
    } catch (error) {
      console.error('Error registrando arrendador:', error);
      throw error;
    }
  }

  async login(credentials: any): Promise<any> {
    try {
      const headers = { 'X-XSRF-TOKEN': this.getCsrfToken() };
      const response = await axios.post('/login', credentials, { headers });
      return response.data;
    } catch (error) {
      console.error('Error en el login:', error);
      throw error;
    }
  }
}
