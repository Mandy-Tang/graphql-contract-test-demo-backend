import { AuthorService } from './author.service';
import { Author } from './../graphql.schema';
import { Resolver, Args } from "@nestjs/graphql";
import { Query } from '@nestjs/graphql';

@Resolver()
export class AuthorResolver {
  constructor(
    private readonly authorService: AuthorService
  ) {}

  @Query()
  async author(@Args('id') id: number): Promise<Author> {
    return this.authorService.findOneById(id);
  }
}