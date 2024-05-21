import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private router: Router, private fb: FormBuilder) {
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
      localStorage.setItem('isAuthenticated', 'true');
      this.router.navigate(['/']);
    }
  }

  register() {
    if (this.registerForm.valid) {
      // Implementar lógica de registro
      alert('Usuario registrado correctamente');
      this.toggleForms();
    }
  }

  toggleForms() {
    this.showLoginForm = !this.showLoginForm;
  }
}
