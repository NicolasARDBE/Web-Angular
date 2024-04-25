export class Solicitud {
    constructor(
      public idSolicitud?: number | null,
      public estado?: string | null,
      public fecha?: string | null,
      public idArrendatario?: number | null,
      public idFinca?: number | null
    ) { }
  }
  