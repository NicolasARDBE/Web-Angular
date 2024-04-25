import { Component, OnInit } from '@angular/core';
import { Router,RouterModule,RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { routes } from './app.routes'; // Asume que tienes un archivo app.routes.ts que exporta tus rutas



//import { DatosestudiantesComponent } from "./components/datosestudiantes/datosestudiantes.component";
//import { DatosclaseComponent } from "./components/datosclase/datosclase.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CommonModule, RouterModule, HeaderComponent, FooterComponent],
})
export class AppComponent implements OnInit{
  title = 'WebAngular';
  constructor(private router: Router){}
  ngOnInit(): void {
    this.router.resetConfig(routes); // Esto configura tus rutas
  }
  
}