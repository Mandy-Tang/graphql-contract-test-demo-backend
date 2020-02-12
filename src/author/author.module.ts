import { AuthorResolver } from './author.resolver';
import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { PostService } from './post/post.service';

@Module({
  providers: [AuthorService, AuthorResolver, PostService]
})
export class AuthorModule {}
