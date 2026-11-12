import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Cambiamos el puerto a 4000 para que no colisione con ms-usuarios (puerto 3000)
  await app.listen(4000);
  console.log(`Gateway running on: ${await app.getUrl()}`);
}
bootstrap();