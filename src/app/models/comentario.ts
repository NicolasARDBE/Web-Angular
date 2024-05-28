import {Arrendatario} from "./arrendatario";
import {Arrendador} from "./arrendador";

export class Comentario {
  
  constructor(
    public idFinca?: number | null,
    public id_comentario?: number | null,
    public fecha?: Date | null,
    public calificacion?: number | null,
    public comentario?: string | null,
    public id_arrendador?: Arrendador | null,
    public id_arrendatario?: Arrendatario | null
  ){}
}
