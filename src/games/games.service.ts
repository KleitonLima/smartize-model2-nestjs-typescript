import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

@Injectable()
export class GamesService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateGameDto) {
    return `This action returns all games`;
  }

  findAll() {
    return this.prisma.game.findMany();
  }

  findOne(id: string) {
    return `This action returns a #${id} game`;
  }

  update(id: string, dto: UpdateGameDto) {
    return `This action updates a #${id} game`;
  }

  remove(id: string) {
    return `This action removes a #${id} game`;
  }
}
