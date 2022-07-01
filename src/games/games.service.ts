import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './entities/game.entity';

@Injectable()
export class GamesService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateGameDto): Promise<Game> {
    return this.prisma.game.create({ data: dto });
  }

  findAll(): Promise<Game[]> {
    return this.prisma.game.findMany();
  }

  findOne(id: string): Promise<Game> {
    return this.prisma.game.findUnique({ where: { id } });
  }

  update(id: string, dto: UpdateGameDto): Promise<Game> {
    return this.prisma.game.update({ where: { id }, data: dto });
  }

  remove(id: string) {
    return this.prisma.game.delete({
      where: { id },
      select: { name: true, price: true },
    });
  }
}
