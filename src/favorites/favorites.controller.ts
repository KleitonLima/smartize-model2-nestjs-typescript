import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation } from '@nestjs/swagger';
import { FavoriteGameDto } from './dto/favorite-game.dto';
import { Favorite } from './entities/favorite.entity';
import { FavoritesService } from './favorites.service';

@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Post()
  @UseGuards(AuthGuard())
  @ApiOperation({
    summary: 'Criar favorito',
  })
  favoriteGame(@Body() dto: FavoriteGameDto): Promise<Favorite> {
    return this.favoritesService.favoriteGame(dto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Deletar favorito',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  disfavoringGame(@Param('id') id: string) {
    return this.favoritesService.disfavoringGame(id);
  }

  @Get('user/:id')
  @ApiOperation({
    summary: 'Listar favoritos por usuário',
  })
  getUserFavorites(@Param('id') id: string) {
    return this.favoritesService.getUserFavorites(id);
  }

  @Get('game/:id')
  @ApiOperation({
    summary: 'Listar favoritos por game',
  })
  getGameFavoritedBy(@Param('id') id: string): Promise<Favorite[]> {
    return this.favoritesService.getGameFavoritedBy(id);
  }
}
