import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('usuarios')
export class UsuarioController {
  @Get()
  obtenerUsuarios() {
    return { mensaje: 'Lista de usuarios desde ms-gateway' };
  }

  @Post()
  crearUsuario(@Body() data: any) {
    return { mensaje: 'Usuario creado con éxito', data };
  }
}