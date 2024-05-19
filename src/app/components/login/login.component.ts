import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})

export class LoginComponent {
  loginCredentials = { email: '', password: '', remember: false };
  registrationDetails = { email: '', password: '' };
  showRegister = false;
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  toggleForms() {
    this.showRegister = !this.showRegister;
    console.log("Estado de showRegister: ", this.showRegister); // Debería mostrar true o false en la consola del navegador
  }

  async login(form: NgForm) {
    if (form.valid) {
      try {
        await this.authService.login(this.loginCredentials);
        this.router.navigate(['/home']);
      } catch (error) {
        this.errorMessage = 'Invalid email or password';
      }
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  // Implementar registrarArrendador si es necesario
}
