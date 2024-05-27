import { Injectable } from '@angular/core';
import axios from 'axios';
import { User } from '../models/user';
import { formatApiUrl } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private arrendatariosUrl = formatApiUrl('arrendatarios/crearArrendatario');
  private arrendadoresUrl = formatApiUrl('arrendadores/crearArrendador');
  private loginUrl = formatApiUrl('jwt/security/autenticar/autenticar-correo-contrasena');

  async fetchCsrfToken(): Promise<void> {
    try {
      const response = await axios.get('/csrf');
      const token = response.data.token;
      document.cookie = `XSRF-TOKEN=${token}`;
    } catch (error) {
      console.error('Error fetching CSRF token:', error);
      throw error;
    }
  }

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
      const response = await axios.post(this.loginUrl, credentials, { headers });
      return response.data;
    } catch (error) {
      console.error('Error en el login:', error);
      throw error;
    }
  }
}
