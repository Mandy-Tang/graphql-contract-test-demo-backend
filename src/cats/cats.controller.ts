import { CatsService } from './cats.service';
import { CreateCatDto, UpdateCatDto } from './create-cat.dto';
import { Controller, Get, Post, Param, Body, Put, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { Cat } from './cat.interface';

@Controller('cats')
export class CatsController {

  constructor(private catService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catService.create(createCatDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `this action returns a ${id} cat`;
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() udpateCatDto: UpdateCatDto): string {
    throw new HttpException('this is a forbidden example', HttpStatus.FORBIDDEN);
  }

  @Delete(':id')
  delete(@Param('id') id: string): string {
    return `this action delete a cat: ${id}`;
  }


}
