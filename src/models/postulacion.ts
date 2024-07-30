
import { Estudiantes } from "./estudiantes2";

export class Postulacion{
    constructor(
    public id: number,
    public fechaPostulacion: Date,
    public estudiante: Estudiantes,
    public estado: string
   
    ){}
}

