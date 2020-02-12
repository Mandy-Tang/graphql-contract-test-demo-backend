import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
  private posts = [
    {
      id: 1,
      title: 'hhh',
      votes: 1,
      authorId: 1
    },
    {
      id: 2,
      title: '4444',
      votes: 3,
      authorId: 1
    },

    {
      id: 3,
      title: '5555',
      votes: 0,
      authorId: 2
    }
  ];

  findAll(authorId: number) {
    return this.posts.filter(post => post.authorId === authorId);
  }

  upvoteById(postId: number) {
    this.posts = this.posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          votes: post.votes + 1
        }
      }
      return post
    });
    return this.posts.find(post => postId === post.id);
  }
}
