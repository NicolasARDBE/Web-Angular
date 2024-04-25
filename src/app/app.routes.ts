import { Routes } from '@angular/router';
import { ListArrendadorComponent } from "./components/arrendador/list-arrendador/list-arrendador.component";
import { ActualizarArrendadorComponent } from "./components/arrendador/actualizar-arrendador/actualizar-arrendador.component";
import { FincaComponent } from './components/fincas/fincas.component';
import { InsertarArrendadorComponent } from './components/arrendador/insertar-arrendador/insertar-arrendador.component';
import { EliminarArrendadorComponent } from './components/arrendador/eliminar-arrendador/eliminar-arrendador.component';
import {ArrendadorComponent} from "./components/arrendador/arrendador/arrendador.component";
import {ArrendatarioComponent} from "./components/arrendatario/arrendatario/arrendatario.component";
import {ComentarioComponent} from "./components/comentario/comentario/comentario.component";


export const routes: Routes = [
  {
    path: 'list-arrendador',
    component: ListArrendadorComponent,
    title: 'Listar Arrendadores'
  },
  {
    path: 'actualizar-arrendador/:id',
    component: ActualizarArrendadorComponent,
    title: 'Actualizar Arrendador'
  },

  {
    path: 'eliminar-arrendador',
    component: EliminarArrendadorComponent,
    title: 'Eliminar Arrendador'
  },



  {
    path: 'insertar-arrendador',
    component: InsertarArrendadorComponent,
    title: 'Insertar Arrendador'
  },
  {
    path: 'fincas',
    component: FincaComponent,
    title: 'Listar Fincas'
  },

  {
    path: 'arrendadores',
    component: ArrendadorComponent,
    title: 'Listar Arrendadores'
  },

  {
    path: 'arrendatarios',
    component: ArrendatarioComponent,
    title: 'Listar Arrendatarios'
  },

  {
    path: 'comentarios',
    component: ComentarioComponent,
    title: 'Listar Comentarios'
  }

];
