import {Comentario} from "./comentario";

export class Arrendatario {
  constructor(
    public id_arrendatario?: number | null,
    public nombre?: string | null,
    public apellido?: string | null,
    public correo?: string | null,
    public contrasena?: string | null,
  ){}
}
