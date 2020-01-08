import { UsersService } from './../users/users.service';
import { Injectable } from '@nestjs/common';
import { User } from 'src/users/user';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}
  public async validateUser(username: string, password: string): Promise<Partial<User> | null> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === password) {
      const {password, ...userInfo} = user;
      return userInfo
    }
    return null;
  }
}
