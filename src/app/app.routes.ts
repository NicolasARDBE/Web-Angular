import { Routes } from '@angular/router';
import { ListArrendadorComponent } from "./components/arrendador/list-arrendador/list-arrendador.component";
import { ActualizarArrendadorComponent } from "./components/arrendador/actualizar-arrendador/actualizar-arrendador.component";
import { FincaComponent } from './components/fincas/fincas.component';

export const routes: Routes = [
  {
    path: '',
    component: ListArrendadorComponent,
    title: 'Listar Arrendadores'
  },
  {
    path: 'actualizar-arrendador/:id',
    component: ActualizarArrendadorComponent,
    title: 'Actualizar Arrendador'
  },

  {
    path: 'fincas',
    component: FincaComponent,
    title: 'Listar Fincas'
  }

  
];
