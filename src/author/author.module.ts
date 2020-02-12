import { AuthorResolver } from './author.resolver';
import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';

@Module({
  providers: [AuthorService, AuthorResolver]
})
export class AuthorModule {}
