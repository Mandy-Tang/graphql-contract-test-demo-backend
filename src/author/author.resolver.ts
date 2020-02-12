import { PostService } from './post/post.service';
import { AuthorService } from './author.service';
import { Author } from './../graphql.schema';
import { Resolver, Args, ResolveProperty, Parent } from "@nestjs/graphql";
import { Query } from '@nestjs/graphql';
import { Post } from 'src/graphql';

@Resolver('Author')
export class AuthorResolver {
  constructor(
    private readonly authorService: AuthorService,
    private readonly postService: PostService
  ) {}

  @Query()
  async author(@Args('id') id: number): Promise<Author> {
    return this.authorService.findOneById(id);
  }

  @ResolveProperty()
  async posts(@Parent() author): Promise<Post[]> {
    return this.postService.findAll(author.id);
  }
}