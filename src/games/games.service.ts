import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleErrorConstraintUnique } from 'src/utils/handle-error-unique.util';
import { FavoriteGameDto } from './dto/create-favorite-game.dto';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './entities/game.entity';

@Injectable()
export class GamesService {
  constructor(private readonly prisma: PrismaService) {}

  async verifyIdAndReturnGame(id: string): Promise<Game> {
    const game: Game = await this.prisma.game.findUnique({ where: { id } });

    if (!game) {
      throw new NotFoundException(`O id ${id} não é válido`);
    }
    return game;
  }

  async create(dto: CreateGameDto): Promise<Game | void> {
    return await this.prisma.game
      .create({ data: dto })
      .catch(handleErrorConstraintUnique);
  }

  findAll(): Promise<Game[]> {
    return this.prisma.game.findMany();
  }

  findOne(id: string): Promise<Game | void> {
    return this.verifyIdAndReturnGame(id);
  }

  async update(id: string, dto: UpdateGameDto): Promise<Game | void> {
    await this.verifyIdAndReturnGame(id);

    return this.prisma.game
      .update({ where: { id }, data: dto })
      .catch(handleErrorConstraintUnique);
  }

  async remove(id: string) {
    await this.verifyIdAndReturnGame(id);

    return this.prisma.game.delete({
      where: { id },
      select: { name: true, price: true },
    });
  }

  favorite(id: string, dto: FavoriteGameDto) {
    return this.prisma.favorite.create({ data: dto });
  }
}
