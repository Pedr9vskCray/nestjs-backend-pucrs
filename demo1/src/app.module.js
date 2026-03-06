import { Module } from '@nestjs/common';
import { SubController, MainController, AltController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [MainController, SubController, AltController],
  providers: [AppService],
})
export class AppModule {}
