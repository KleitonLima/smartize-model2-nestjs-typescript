import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { FavoriteGameDto } from './dto/favorite-game.dto';
import { Favorite } from './entities/favorite.entity';

@Injectable()
export class FavoritesService {
  constructor(private readonly prisma: PrismaService) {}

  favoriteGame(dto: FavoriteGameDto): Promise<Favorite> {
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

  disfavoringGame(id: string) {
    return this.prisma.favorite.delete({ where: { id } });
  }
}
