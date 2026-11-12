import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Opcional: si necesitas habilitar CORS o un prefijo global para las rutas
  // app.enableCors();
  // app.setGlobalPrefix('api');

  await app.listen(3000); // Puedes cambiar el puerto según la configuración de tu pasarela
  console.log(`Gateway running on: ${await app.getUrl()}`);
}
bootstrap();