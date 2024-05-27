import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { Finca } from '../../../models/finca';
import { FincaService } from '../../../services/finca.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginComponent } from '../../login/login.component';

@Component({
  selector: 'app-agregar-finca',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './agregar-finca.component.html',
  styleUrl: './agregar-finca.component.css'
})
export class AgregarFincaComponent {
  finca: Finca = new Finca();
  editing: boolean = false;

  constructor(private fincaService: FincaService) {}

  resetFinca() {
    this.finca = new Finca(); // Crea una nueva instancia de Finca
    this.editing = false;    // Actualiza el estado de edición
  }

  saveFinca() {
    this.fincaService.saveFinca(this.finca).then(() => {
      console.log(localStorage.getItem('token'))
      this.finca = new Finca(); // Reset the form
      this.editing = false;
    }).catch(error => console.error('Error saving finca:', error));
  }

  editFinca(finca: Finca) {
    this.finca = { ...finca };
    this.editing = true;
  }
}
