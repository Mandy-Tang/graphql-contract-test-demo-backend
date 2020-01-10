import { CatSchema } from './cat.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'Cat',
      schema: CatSchema
    }])
  ],
  controllers: [CatsController],
  providers: [CatsService]
})
export class CatsModule {}
