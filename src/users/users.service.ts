import { Injectable } from '@nestjs/common';
import { User } from './entity/users.entity';

@Injectable()
export class UsersService {
  users: User[] = [];

  getAll() {
    return this.users;
  }
}
