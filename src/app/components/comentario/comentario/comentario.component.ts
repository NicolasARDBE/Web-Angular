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
  idFinca: number | null = null;
  editing: boolean = false;

  constructor(private comentarioService: ComentarioService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idFinca = +params['idFinca'];
      this.getComentarios();
    });
  }

  resetComentario() {
    this.comentario = new Comentario(); // Crea una nueva instancia de Comentario
    this.editing = false; // Actualiza el estado de edición
  }

  getComentarios() {
    if (this.idFinca !== null) {
      this.comentarioService.getComentariosByFinca(this.idFinca).then(data => {
        this.comentarios = data;
      }).catch(error => console.error('Error fetching comentarios:', error));
    }
  }

  saveComentario() {
    this.comentario.fecha = new Date(); // Asegura que la fecha se establezca correctamente
    this.comentario.idFinca = this.idFinca;
    this.comentarioService.saveComentario(this.comentario).then(() => {
        this.getComentarios();
        this.comentario = new Comentario();
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
