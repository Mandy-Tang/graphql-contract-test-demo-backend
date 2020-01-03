import { HttpExceptionFilter } from './../common/filter/http-exception.filter';
import { CatsService } from './cats.service';
import { CreateCatDto, UpdateCatDto } from './create-cat.dto';
import { Controller, Get, Post, Param, Body, Put, Delete, HttpException, HttpStatus, UseFilters, UsePipes, UseInterceptors } from '@nestjs/common';
import { Cat } from './cat.interface';
import { ValidationPipe } from 'src/common/pipe/validation.pipe';
import { LoggingInterceptor } from 'src/common/interceptor/logging.interceptor';

@Controller('cats')
@UseFilters(HttpExceptionFilter)
@UseInterceptors(LoggingInterceptor)
export class CatsController {

  constructor(private catService: CatsService) {}

  @Post()
  @UsePipes(ValidationPipe)
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
