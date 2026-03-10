import { Module } from '@nestjs/common';
import { DadosBiblioteca } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [DadosBiblioteca],
})
export class AppModule {}
