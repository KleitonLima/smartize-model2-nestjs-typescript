import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/users.entity';

@Injectable()
export class UsersService {
  users: User[] = [];

  getAll(): User[] {
    return this.users;
  }

  create(createUserDto: CreateUserDto) {
    const newUser: User = { id: uuidv4(), ...createUserDto };

    this.users.push(newUser);

    return newUser;
  }
}
