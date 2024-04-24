export class Finca {
    constructor(
      public id_finca?: number | null,
      public nombre?: string | null,
      public ubicacion?: string | null,
      public descripcion?: string | null,
      public precio?: number | null,
      public id_arrendador?: number | null,
      public id_arrendatario?: number | null
    ){}
}

