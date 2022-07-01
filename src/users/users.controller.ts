import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
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

  @Get(':id')
  @ApiOperation({
    summary: 'Lista usuário pelo id',
  })
  getById(@Param('id') id: string): Promise<User> {
    return this.usersService.getById(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Cria um novo usuário',
  })
  create(@Body() dto: CreateUserDto): Promise<User> {
    return this.usersService.create(dto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Deletar usuário',
  })
  delete(@Param('id') id: string) {
    return this.usersService.delete(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualizar usuário',
  })
  update(@Param('id') id: string, @Body() dto: UpdateUserDto): Promise<User> {
    return this.usersService.update(id, dto);
  }
}
