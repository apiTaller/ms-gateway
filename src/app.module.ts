import { Module } from '@nestjs/common';
import { UsuariosModule } from './modules/ms-usuarios/usuarios.module';

@Module({
  imports: [UsuariosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}