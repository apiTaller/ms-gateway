import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { UsuariosModule } from './modules/ms-usuarios/usuarios.module';
import { ClientesController } from './modules/ms-clientes/clientes.controller';

@Module({
  imports: [HttpModule, UsuariosModule],
  controllers: [ClientesController],
  providers: [],
})
export class AppModule {}