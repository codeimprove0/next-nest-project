 
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module'; 
import { HttpExceptionFilter } from './exception/http.filter'; 
import { AuthGuard } from './guards/auth.guard';  
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); 
  app.useGlobalPipes(new ValidationPipe) 

  //app.useGlobalFilters(new HttpExceptionFilter()) 

 // app.useGlobalGuards(new AuthGuard())
  const port = app.get(ConfigService).get('SERVER_PORT');
  await app.listen(port);
  console.log("APP IS RUNNING ON PORT:",port);
}
bootstrap();
