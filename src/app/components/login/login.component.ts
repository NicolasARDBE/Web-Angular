import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  registerForm: FormGroup;
  showLoginForm = true;

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService, private http: HttpClient) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: [false]
    });

    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.pattern('[0-9]+')]],
      contrasena: ['', [Validators.required, Validators.minLength(8)]], // Cambiar 'password' a 'contrasena'
      userType: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.fetchCsrfToken();
  }

  fetchCsrfToken() {
    this.http.get('/csrf').subscribe((response: any) => {
      const token = response.token;
      document.cookie = `XSRF-TOKEN=${token}`;
    });
  }

  login() {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      this.authService.login(credentials)
        .then(response => {
          localStorage.setItem('isAuthenticated', 'true');
          this.router.navigate(['/']);
        })
        .catch(error => console.error('Error en el login:', error));
    }
  }

  register() {
    if (this.registerForm.valid) {
      const newUser: User = this.registerForm.value;
      console.log('Datos del formulario de registro:', newUser); // Verificar los datos aquí
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
