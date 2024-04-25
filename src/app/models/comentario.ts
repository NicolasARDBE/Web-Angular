
export class Comentario {
    constructor(
      public id_solicitud?: number | null,
      public calificacion?: number | null,
      public comentario?: string | null,
      public fecha?: string | null,
      public id_Arrendador?: string | null,
      public id_Arrendatario?: string | null
    ){}
  }