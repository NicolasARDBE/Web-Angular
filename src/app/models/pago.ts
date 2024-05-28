export class Pago {
    constructor(
      public id_pago?: number | null,
      public fecha?: Date | null,
      public banco?: string | null,
      public numeroCuenta?: string | null,
      public id_solicitud?: number | null,
    ){}
}