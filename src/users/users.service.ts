import { Injectable } from '@nestjs/common';
import { AuthUser } from './user.model';


@Injectable()
export class UsersService {
  private users: AuthUser[] = [];
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

  public async findOne(username: string): Promise<AuthUser | undefined> {
    return this.users.find(user => user.username === username)
  }
}
