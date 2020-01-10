import { CreateCatDto } from './create-cat.dto';
import { Cat } from './cat.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];
  constructor(
    @InjectModel('Cat') private readonly catModel: Model<Cat>
  ) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return await createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return await this.catModel.find().exec();
  }
}
