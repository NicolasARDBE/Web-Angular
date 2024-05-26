import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  registerForm: FormGroup;
  showLoginForm = true;

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: [false]
    });

    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern('[0-9]+')]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      userType: ['', Validators.required]
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
