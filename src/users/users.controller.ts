import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/users.entity';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiOperation({
    summary: 'Listar todos os usuários',
  })
  getAll(): Promise<User[]> {
    return this.usersService.getAll();
  }

  // @Post()
  // create(@Body() createUserDto: CreateUserDto): User {
  //   // return this.usersService.create(createUserDto);
  // }
}
