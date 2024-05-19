import { Injectable } from '@angular/core';
import axios from 'axios';
import { formatApiUrl } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = formatApiUrl('auth'); // Corrección aquí, era apuUrl

  async login (credentials: {email: string, password: string}): Promise<any> {
    try {
      const response = await axios.post(`${this.apiUrl}/login`, credentials);
      return response.data;
    } catch (error) {
      console.error('Error al iniciar sesión', error);
      throw error;
    }
  }
}
