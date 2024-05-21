import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent]
})
export class AppComponent implements OnInit {
  title = 'WebAngular';
  isAuthenticated = false;  // Añade una propiedad de autenticación

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Aquí puedes agregar cualquier lógica adicional que necesites durante la inicialización del componente
  }
}
