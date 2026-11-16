import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ClientesController } from './clientes.controller';

@Module({
  imports: [HttpModule],
  controllers: [ClientesController],
})
export class ClientesModule {}