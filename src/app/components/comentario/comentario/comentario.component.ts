import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule, NgForOf} from "@angular/common";
import { Comentario } from '../../../models/comentario';
import { Arrendador } from '../../../models/arrendador';
import { Arrendatario } from '../../../models/arrendatario';
import { ComentarioService } from '../../../services/comentario.service';

@Component({
  selector: 'app-comentario',
  standalone: true,
    imports: [
      CommonModule,FormsModule
    ],
  templateUrl: './comentario.component.html',
  styleUrl: './comentario.component.css'
})
export class ComentarioComponent implements OnInit{

  comentarios: Comentario[] = [];
  comentario: Comentario = new Comentario();
  editing: boolean = false;

  constructor(private comentarioService: ComentarioService) {}

  ngOnInit() {
    this.getComentarios();
  }

  resetComentario() {
    this.comentario = new Comentario(); // Crea una nueva instancia de Finca
    this.editing = false;    // Actualiza el estado de edición
  }

  getComentarios() {
    this.comentarioService.getAllComentarios().then(data => {
      this.comentarios = data;
    }).catch(error => console.error('Error fetching comentarios:', error));
  }

  saveComentario() {
    //Crear arrendador y arrendatario, buscándolos por id y metiéndoselos al comentario
    this.comentarioService.saveComentario(this.comentario).then(() => {
      this.getComentarios(); // Refresh the list
      this.comentario = new Comentario(); // Reset the form
      this.editing = false;
    }).catch(error => console.error('Error saving comentario:', error));
  }

  editComentario(comentario: Comentario) {
    this.comentario = { ...comentario };
    this.editing = true;
  }

  deleteComentario(id: number | null | undefined) {
    if (id !== null && id !== undefined) { // Asegura que id no sea null ni undefined
      this.comentarioService.deleteComentario(id).then(() => {
        this.getComentarios(); // Refresca la lista
      }).catch(error => console.error('Error deleting finca:', error));
    }
  }
}
