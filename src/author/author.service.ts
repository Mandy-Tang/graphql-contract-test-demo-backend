import { Author } from './../graphql.schema';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthorService {
  private authors: Author[] = [
    {
      id: 1,
      firstName: 'zhang',
    lastName: 'san',
    posts: []
    },
    {
      id: 2,
      firstName: 'li',
      lastName: 'si',
      posts: []
    }
  ]
  
  public findOneById(id: number): Author {
    return this.authors.find(author => author.id === id);
  }
}
