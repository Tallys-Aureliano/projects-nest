import { NestFactory } from '@nestjs/core';
import { ProjectsModule } from './app.module';
// import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(ProjectsModule);
  await app.listen(8088);
}
bootstrap();
