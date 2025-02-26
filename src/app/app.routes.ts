import { RouterModule, Routes } from '@angular/router';
import { ListArrendadorComponent } from './components/arrendador/list-arrendador/list-arrendador.component';
import { ActualizarArrendadorComponent } from './components/arrendador/actualizar-arrendador/actualizar-arrendador.component';
import { FincaComponent } from './components/fincas/fincas.component';
import { InsertarArrendadorComponent } from './components/arrendador/insertar-arrendador/insertar-arrendador.component';
import { EliminarArrendadorComponent } from './components/arrendador/eliminar-arrendador/eliminar-arrendador.component';
import { ArrendadorComponent } from './components/arrendador/arrendador/arrendador.component';
import { ArrendatarioComponent } from './components/arrendatario/arrendatario/arrendatario.component';
import { SolicitudComponent } from './components/solicitud/solicitud.component';
import { InsertarSolicitudComponent } from './components/solicitud/insertar-solicitud/insertar-solicitud.component';
import { ComentarioComponent } from './components/comentario/comentario/comentario.component';
import { LoginComponent } from './components/login/login.component';
import { FincaArrendadorComponent } from './components/fincas/finca-arrendador/finca-arrendador.component';
import { AgregarPagoComponent } from './components/pago/agregar-pago/agregar-pago.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: 'list-arrendador', component: ListArrendadorComponent, title: 'Listar Arrendadores' },
  { path: 'actualizar-arrendador/:id', component: ActualizarArrendadorComponent, title: 'Actualizar Arrendador' },
  { path: 'eliminar-arrendador', component: EliminarArrendadorComponent, title: 'Eliminar Arrendador' },
  { path: 'insertar-arrendador', component: InsertarArrendadorComponent, title: 'Insertar Arrendador' },
  { path: 'fincas', component: FincaComponent, title: 'Listar Fincas' },
  { path: 'arrendadores', component: ArrendadorComponent, title: 'Listar Arrendadores' },
  { path: 'arrendatarios', component: ArrendatarioComponent, title: 'Listar Arrendatarios' },
  { path: 'insertar-solicitudes', component: InsertarSolicitudComponent, title: 'Insertar Solicitudes' },
  { path: 'ver-solicitudes', component: SolicitudComponent, title: 'Ver Solicitudes' },
  { path: 'mis-fincas', component: FincaArrendadorComponent, title: 'Mis Fincas' },
  { path: 'agregar-finca', component: InsertarArrendadorComponent, title: 'Agregar Finca' },
  { path: 'pagina-pago/:id', component: AgregarPagoComponent, title: 'Página de Pago' },
  { path: 'comentarios/:id', component: ComentarioComponent, title: 'Comentarios' },
  { path: 'actualizar-perfil', component: ActualizarArrendadorComponent, title: 'Actualizar Información' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
  { path: 'fincas', component: FincaComponent },
  { path: '', redirectTo: '/fincas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
