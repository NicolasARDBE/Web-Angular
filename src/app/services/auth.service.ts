import { Injectable } from '@angular/core';
import axios from 'axios';
import { User } from '../models/user';
import { formatApiUrl } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private arrendatariosUrl = formatApiUrl('arrendatarios/crearArrendatario');
  private arrendadoresUrl = formatApiUrl('arrendadores/crearArrendadorSIN');

  constructor() {
    this.setCsrfTokenHeader();
  }

  async setCsrfTokenHeader() {
    try {
      const response = await axios.get('/csrf');
      axios.defaults.headers.common['X-CSRF-TOKEN'] = response.data.token;
    } catch (error) {
      console.error('Error getting CSRF token:', error);
    }
  }

  async registerArrendatario(arrendatario: User): Promise<any> {
    try {
      const response = await axios.post(this.arrendatariosUrl, arrendatario);
      return response.data;
    } catch (error) {
      console.error('Error registrando arrendatario:', error);
      throw error;
    }
  }

  async registerArrendador(arrendador: User): Promise<any> {
    try {
      const response = await axios.post(this.arrendadoresUrl, arrendador);
      return response.data;
    } catch (error) {
      console.error('Error registrando arrendador:', error);
      throw error;
    }
  }

  async login(credentials: any): Promise<any> {
    // Lógica de login
  }
}
