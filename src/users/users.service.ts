import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { v4 as uuidv4 } from 'uuid';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/users.entity';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  getAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  // create(createUserDto: CreateUserDto): User {
  //   const newUser: User = { id: uuidv4(), ...createUserDto };

  //   this.users.push(newUser);

  //   return newUser;
  // }
}
