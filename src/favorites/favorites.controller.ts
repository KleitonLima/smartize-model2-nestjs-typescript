import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { FavoriteGameDto } from './dto/favorite-game.dto';
import { Favorite } from './entities/favorite.entity';
import { FavoritesService } from './favorites.service';

@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Post()
  favoriteGame(@Body() dto: FavoriteGameDto): Promise<Favorite> {
    return this.favoritesService.favoriteGame(dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  disfavoringGame(@Param('id') id: string) {
    return this.favoritesService.disfavoringGame(id);
  }

  @Get('user/:id')
  getUserFavorites(@Param('id') id: string) {
    return this.favoritesService.getUserFavorites(id);
  }

  @Get('game/:id')
  getGameFavoritedBy(@Param('id') id: string): Promise<Favorite[]> {
    return this.favoritesService.getGameFavoritedBy(id);
  }
}
