import { Body, Controller, Post } from '@nestjs/common';
import { FavoriteGameDto } from './dto/favorite-game.dto';
import { FavoritesService } from './favorites.service';

@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Post()
  favoriteGame(@Body() dto: FavoriteGameDto) {
    return this.favoritesService.favoriteGame(dto);
  }
}
