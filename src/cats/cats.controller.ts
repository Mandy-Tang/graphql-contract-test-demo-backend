import { CreateCatDto, UpdateCatDto } from './create-cat.dto';
import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';

@Controller('cats')
export class CatsController {


  @Post()
  create(@Body() createCatDto: CreateCatDto): string {
    return `this action adds a new cat: ${createCatDto.name}`;
  }

  @Get(':id')   
  findOne(@Param('id') id: string): string {
    return `this action returns a ${id} cat`;
  }

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() udpateCatDto: UpdateCatDto): string {
    return `this action update a cat: ${id} ${udpateCatDto.name}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string): string {
    return `this action delete a cat: ${id}`;
  }


}
