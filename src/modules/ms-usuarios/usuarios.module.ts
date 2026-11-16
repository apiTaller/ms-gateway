import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UsuariosController } from './usuarios.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    ClientsModule.register([
      {
        name: 'MS_USUARIOS',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 3001
        },
      },
    ]),
  ],
  controllers: [UsuariosController],
})
export class UsuariosModule {}