import { Body, Controller, Post } from '@nestjs/common';
import { Estudiantes } from '../models/estudiantes2';


@Controller('estudiantes')
export class EstudiantesController {
    // Registrar un nuevo estudiante
    @Post()
    registrarEstudiante(@Body() estudiante: Estudiantes) {
        return estudiante;
    }
}










//Registrar un nuevo estudiante
//Obtener un estudiante según su id//
//Obtener todos los estudiantes//
//Eliminar un estudiante según su id//