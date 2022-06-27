import { Injectable } from '@nestjs/common';
import { uuid } from 'uuidv4';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/users.entity';

@Injectable()
export class UsersService {
  users: User[] = [];

  getAll() {
    return this.users;
  }

  create(createUserDto: CreateUserDto) {
    const newUser: User = { id: uuid(), ...createUserDto };

    this.users.push(newUser);

    return newUser;
  }
}
