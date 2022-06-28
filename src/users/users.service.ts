import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/users.entity';

@Injectable()
export class UsersService {
  users: User[] = [
    {
      id: '8869c36f-8297-499b-ab2d-1ab2085f5ffb',
      name: 'Kleiton',
      email: 'kleiton@blue.com',
      password: 'kle123',
    },
    {
      id: '82a69f1a-b31d-4883-8f87-e45269f60e65',
      name: 'Kamila',
      email: 'kamila@blue.com',
      password: 'kam123',
    },
    {
      id: 'bda345be-cd13-4917-9ca5-0c2b38ea0c13',
      name: 'Andreza',
      email: 'andreza@blue.com',
      password: 'and123',
    },
  ];

  getAll(): User[] {
    return this.users;
  }

  create(createUserDto: CreateUserDto): User {
    const newUser: User = { id: uuidv4(), ...createUserDto };

    this.users.push(newUser);

    return newUser;
  }
}
