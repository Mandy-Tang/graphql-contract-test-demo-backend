import { Photo } from './photo.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo) private readonly photoRepository: Repository<Photo>
  ) {

  }

  async findAll() {
    return this.photoRepository.find();
  }
}
