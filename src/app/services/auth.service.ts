import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
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

  private authChange = new Subject<boolean>();
  authChange$ = this.authChange.asObservable();

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
      const { token, usuario } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(usuario));
      this.authChange.next(true);
      return response.data;
    } catch (error) {
      console.error('Error en el login:', error);
      throw error;
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.authChange.next(false);
  }
}
