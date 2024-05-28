import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ComentarioService } from '../../../services/comentario.service';
import { Comentario } from '../../../models/comentario';


@Component({
  selector: 'app-comentarios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {

  comentarios: Comentario[] = [];
  comentario: Comentario = new Comentario();
  idSolicitud!: number;
  editing: boolean = false;

  constructor(private comentarioService: ComentarioService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.idSolicitud = + params['id']; // El '+' convierte el string a número
      // Ahora puedes usar this.idSolicitud para cargar los datos necesarios para el pago
      console.log('ID de la solicitud:', this.idSolicitud);
    });
  }

  resetComentario() {
    this.comentario = new Comentario(); // Crea una nueva instancia de Comentario
    this.editing = false; // Actualiza el estado de edición
  }

  getComentarios() {
    if (this.idSolicitud !== null) {
      this.comentarioService.getComentariosBySolicitud(this.idSolicitud).then(data => {
        this.comentarios = data;
      }).catch(error => console.error('Error fetching comentarios:', error));
    }
  }

  saveComentario() {

    console.log("La solicitud: " + this.idSolicitud);

    this.comentario.fecha = new Date(); // Asegura que la fecha se establezca correctamente
    this.comentarioService.saveComentario(this.comentario, this.idSolicitud).then(() => {
      console.log(localStorage.getItem('token'))
      this.comentario = new Comentario(); // Reset the form
      this.editing = false;
    }).catch(error => console.error('Error saving comentario:', error));
}

  editComentario(comentario: Comentario) {
    this.comentario = { ...comentario };
    this.editing = true;
  }

  deleteComentario(id: number | null | undefined) {
    if (id !== null && id !== undefined) {
      this.comentarioService.deleteComentario(id).then(() => {
        this.getComentarios(); // Refresca la lista
      }).catch(error => console.error('Error deleting comentario:', error));
    }
  }
}
