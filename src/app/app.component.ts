import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ArrendadorService } from './services/arrendador.service';
import { ListArrendadorComponent } from "./components/arrendador/list-arrendador/list-arrendador.component";
import { ActualizarArrendadorComponent } from "./components/arrendador/actualizar-arrendador/actualizar-arrendador.component";
//import { DatosestudiantesComponent } from "./components/datosestudiantes/datosestudiantes.component";
//import { DatosclaseComponent } from "./components/datosclase/datosclase.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CommonModule, ListArrendadorComponent, ActualizarArrendadorComponent]
})
export class AppComponent {
  title = 'WebAngular';
  constructor(private arrendadorService: ArrendadorService){}
  ngOnInit(): void {}
}