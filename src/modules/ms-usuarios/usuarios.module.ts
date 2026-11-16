import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { UsuariosController } from './usuarios.controller';

@Module({
  imports: [HttpModule],
  controllers: [UsuariosController],
  providers: [],
})
export class UsuariosModule {}