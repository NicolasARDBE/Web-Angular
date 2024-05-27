import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Asegúrate de que ReactiveFormsModule está importado aquí
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  registerForm: FormGroup;
  showLoginForm = true;

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', Validators.required],
      rememberMe: [false]
    });

    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.pattern('[0-9]+')]],
      contrasena: ['', [Validators.required, Validators.minLength(8)]],
      userType: ['', Validators.required]
    });
  }

  async ngOnInit(): Promise<void> {
    await this.authService.fetchCsrfToken();
  }

  async login() {
    if (this.loginForm.valid) {
      try {
        const credentials = this.loginForm.value;
        const response = await this.authService.login(credentials);
        localStorage.setItem('isAuthenticated', 'true');
        this.router.navigate(['/']);  // Redirigir al usuario a la página principal
      } catch (error) {
        console.error('Error en el login:', error);
      }
    }
  }

  register() {
    if (this.registerForm.valid) {
      const newUser: User = this.registerForm.value;
      console.log('Datos del formulario de registro:', newUser);
      if (newUser.userType === 'arrendador') {
        this.authService.registerArrendador(newUser)
          .then(response => {
            alert('Arrendador registrado correctamente');
            this.toggleForms();
          })
          .catch(error => console.error('Error en el registro de arrendador:', error));
      } else if (newUser.userType === 'arrendatario') {
        this.authService.registerArrendatario(newUser)
          .then(response => {
            alert('Arrendatario registrado correctamente');
            this.toggleForms();
          })
          .catch(error => console.error('Error en el registro de arrendatario:', error));
      }
    }
  }

  toggleForms() {
    this.showLoginForm = !this.showLoginForm;
  }
}
