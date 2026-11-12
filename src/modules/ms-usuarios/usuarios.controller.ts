import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Controller('usuarios')
export class UsuariosController {
  // URL donde está corriendo tu microservicio ms-usuarios
  private readonly usuariosServiceUrl = 'http://localhost:3000/usuarios';

  constructor(private readonly httpService: HttpService) {}

  @Get()
  async obtenerUsuarios() {
    const { data } = await firstValueFrom(
      this.httpService.get(this.usuariosServiceUrl),
    );
    return data;
  }

  @Get(':id')
  async obtenerUsuarioPorId(@Param('id') id: string) {
    const { data } = await firstValueFrom(
      this.httpService.get(`${this.usuariosServiceUrl}/${id}`),
    );
    return data;
  }

  @Post()
  async crearUsuario(@Body() body: any) {
    const { data } = await firstValueFrom(
      this.httpService.post(this.usuariosServiceUrl, body),
    );
    return data;
  }

  @Patch(':id')
  async actualizarUsuario(@Param('id') id: string, @Body() body: any) {
    const { data } = await firstValueFrom(
      this.httpService.patch(`${this.usuariosServiceUrl}/${id}`, body),
    );
    return data;
  }

  @Delete(':id')
  async eliminarUsuario(@Param('id') id: string) {
    const { data } = await firstValueFrom(
      this.httpService.delete(`${this.usuariosServiceUrl}/${id}`),
    );
    return data;
  }
}