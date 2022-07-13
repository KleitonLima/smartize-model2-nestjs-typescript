import { Injectable, NotFoundException } from '@nestjs/common';
import { handleErrorConstraintUnique } from 'src/utils/handle-error-unique.util';
import { FavoriteGameDto } from 'src/favorites/dto/favorite.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Favorite } from 'src/favorites/entities/favorite.entity';
import { User } from 'src/users/entities/users.entity';
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

  async findUsersLiked(id: string) {
    const game: Game = await this.verifyIdAndReturnGame(id);

    return this.prisma.favorite.findMany({
      where: { gameName: game.name },
      select: {
        gameName: true,
        user: { select: { id: true, name: true, email: true } },
      },
    });
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

  async favorite(id: string, dto: FavoriteGameDto): Promise<Favorite> {
    const game: Game = await this.prisma.game.findUnique({
      where: { name: dto.gameName },
    });

    if (!game) {
      throw new NotFoundException(`Jogo '${dto.gameName}' não encontrado`);
    }

    const user: User = await this.prisma.user.findUnique({
      where: { id: dto.userId },
    });

    if (!user) {
      throw new NotFoundException(
        `Usuário com id: '${dto.userId}' não encontrado`,
      );
    }

    return this.prisma.favorite.create({ data: dto });
  }

  async disfavoring(id: string) {
    await this.verifyIdAndReturnGame(id);

    return this.prisma.favorite.delete({ where: { id } });
  }
}
