import { Injectable } from '@nestjs/common';
import { User } from './user';


@Injectable()
export class UsersService {
  private users: User[] = [];
  constructor () {
    this.users = [
      {
        id: 1,
        username: 'zhangsan',
        password: 'pwd@zhang',
      },
      {
        id: 2,
        username: 'lisi',
        password: 'pwd@li',
      },
      {
        id: 3,
        username: 'wangwu',
        password: 'pwd@wang',
      },
    ];
  }

  public async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username)
  }
}
