import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { FavoriteGameDto } from './dto/favorite-game.dto';

@Injectable()
export class FavoritesService {
  constructor(private readonly prisma: PrismaService) {}

  favoriteGame(dto: FavoriteGameDto) {
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
}
