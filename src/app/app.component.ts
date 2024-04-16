import { Component, OnInit } from '@angular/core';
import { Router,RouterModule,RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ArrendadorService } from './services/arrendador.service';
import { ListArrendadorComponent } from "./components/arrendador/list-arrendador/list-arrendador.component";
import { ActualizarArrendadorComponent } from "./components/arrendador/actualizar-arrendador/actualizar-arrendador.component";
import { InsertarArrendadorComponent } from "./components/arrendador/insertar-arrendador/insertar-arrendador.component";
import { EliminarArrendadorComponent } from "./components/arrendador/eliminar-arrendador/eliminar-arrendador.component";
import { FincaComponent } from './components/fincas/fincas.component';
import { routes } from './app.routes'; // Asume que tienes un archivo app.routes.ts que exporta tus rutas



//import { DatosestudiantesComponent } from "./components/datosestudiantes/datosestudiantes.component";
//import { DatosclaseComponent } from "./components/datosclase/datosclase.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CommonModule, ListArrendadorComponent, ActualizarArrendadorComponent, InsertarArrendadorComponent, EliminarArrendadorComponent, FincaComponent, RouterModule ],
})
export class AppComponent implements OnInit{
  title = 'WebAngular';
  constructor(private router: Router){}
  ngOnInit(): void {
    this.router.resetConfig(routes); // Esto configura tus rutas
  }
  
}