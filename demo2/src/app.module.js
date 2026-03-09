import { Module } from '@nestjs/common';
import { LibraryController } from './app.controller';
import { collection } from './app.service';
import { collection_stats } from './app.service';

@Module({
  imports: [],
  controllers: [LibraryController],
  providers: [collection, collection_stats],
})
export class AppModule {}
