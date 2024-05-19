export class Finca {
    constructor(
      public id_finca?: number | null,
      public nombre?: string | null,
      public ubicacion?: string | null,
      public descripcion?: string | null,
      public municipio?: string | null,
      public activa?: boolean | null,
      public precio?: number | null,
      public id_arrendador?: number | null,
    ){}
}

