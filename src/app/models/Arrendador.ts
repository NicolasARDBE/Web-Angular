import { Comentario } from "./Comentario";

export class Arrendador {
    constructor(
      public id_arrendador?: number | null,
      public nombre?: string | null,
      public apellido?: string | null,
      public correo?: string | null,
      public telefono?: string | null,
      public contrasena?: string | null,
      public nombresFincas?: string[] | null,
      public comentarios?: Comentario[] | null
    ){}
  }