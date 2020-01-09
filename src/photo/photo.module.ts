import { Photo } from './photo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { PhotoController } from './photo.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Photo])
  ],
  providers: [PhotoService],
  controllers: [PhotoController]
})
export class PhotoModule {}
