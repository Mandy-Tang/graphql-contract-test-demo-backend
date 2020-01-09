import { PhotoService } from './photo.service';
import { Photo } from './photo.entity';
import { Controller, Get } from '@nestjs/common';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}
  
  @Get()
  async findAll(): Promise<Photo[]> {
    return await this.photoService.findAll();
  }
}
