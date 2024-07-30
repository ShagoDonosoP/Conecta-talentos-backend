import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Estudiantes } from '../models/estudiantes2';
import { get } from 'http';


@Controller('estudiantes')
export class EstudiantesController {
    // Registrar un nuevo estudiante
    @Post()
    registrarEstudiante(@Body() estudiante: Estudiantes) {
        return estudiante;
    }

    //Obtener un estudiante según su id//
    @Get(':id')
    obtenerEstudianteporid(@Param('id') id: number) {
        console.log(id);
        return id;
    }

    //Obtener todos los estudiantes//

    @Get()
    obtenerEstudiantes() {
        return [];
    }

    //Eliminar un estudiante según su id//
    @Delete(':id')
    eliminarEstudiante(@Param('id') id: number) {
        
        return id;
         }
}
