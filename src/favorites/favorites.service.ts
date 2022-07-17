import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Game } from 'src/games/entities/game.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from 'src/users/entities/users.entity';
import { FavoriteGameDto } from './dto/favorite-game.dto';
import { Favorite } from './entities/favorite.entity';

@Injectable()
export class FavoritesService {
  constructor(private readonly prisma: PrismaService) {}

  async verifyUserId(id: string): Promise<void | never> {
    const user: User = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(
        `Não foi encontrado nenhum usuário com id ${id}`,
      );
    }
  }

  async verifyGameId(id: string): Promise<void | never> {
    const game: Game = await this.prisma.game.findUnique({
      where: { id },
    });

    if (!game) {
      throw new NotFoundException(
        `Não foi encontrado nenhum jogo com id ${id}`,
      );
    }
  }
  async verifyFavoriteId(id: string): Promise<void | never> {
    const favorite: Favorite = await this.prisma.favorite.findUnique({
      where: { id },
    });

    if (!favorite) {
      throw new NotFoundException(
        `Não foi encontrado nenhum favorito com id ${id}`,
      );
    }
  }

  async favoriteGame(dto: FavoriteGameDto): Promise<Favorite> {
    await this.verifyUserId(dto.userId);
    await this.verifyGameId(dto.gameId);

    const data: Prisma.FavoriteCreateInput = {
      users: {
        connect: {
          id: dto.userId,
        },
      },
      games: {
        connect: {
          id: dto.gameId,
        },
      },
    };

    return this.prisma.favorite.create({ data });
  }

  async disfavoringGame(id: string) {
    await this.verifyFavoriteId(id);
    return this.prisma.favorite.delete({ where: { id } });
  }
  async getUserFavorites(id: string) {
    await this.verifyUserId(id);

    return this.prisma.favorite.findMany({ where: { userId: id } });
  }

  async getGameFavoritedBy(id: string): Promise<Favorite[]> {
    await this.verifyGameId(id);

    return this.prisma.favorite.findMany({ where: { gameId: id } });
  }
}
