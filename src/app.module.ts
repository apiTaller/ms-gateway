import { Module } from '@nestjs/common';
import { UsuariosModule } from './modules/ms-usuarios/usuarios.modules';

@Module({
  imports: [UsuariosModule],
})
export class AppModule {}