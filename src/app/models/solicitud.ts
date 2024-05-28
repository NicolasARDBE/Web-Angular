import { Estado } from "../enums/estado.enum";

export class Solicitud {
    constructor(
      public idSolicitud?: number | null,
      public estado?: Estado | null,
      public fecha?: string | null,
      public idArrendatario?: number | null,
      public idFinca?: number | null
    ) { }
  }
  