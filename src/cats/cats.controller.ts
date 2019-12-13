import { Controller, Get, Post, Param } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @Post()
  create(): string {
    return 'this action adds a new cat';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `this action returns a ${id} cat`;
  }
}
