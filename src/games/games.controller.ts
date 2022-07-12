import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GamesService } from './games.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Game } from './entities/game.entity';
import { FavoriteGameDto } from './dto/create-favorite-game.dto';

@ApiTags('games')
@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Post()
  @ApiOperation({
    summary: 'Criar novo jogo',
  })
  create(@Body() dto: CreateGameDto): Promise<Game | void> {
    return this.gamesService.create(dto);
  }

  @Get()
  @ApiOperation({
    summary: 'Exibir todos os jogos',
  })
  findAll(): Promise<Game[]> {
    return this.gamesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Exibir um jogo',
  })
  findOne(@Param('id') id: string): Promise<Game | void> {
    return this.gamesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualizar um jogo',
  })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateGameDto,
  ): Promise<Game | void> {
    return this.gamesService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Deletar um jogo',
  })
  remove(@Param('id') id: string) {
    return this.gamesService.remove(id);
  }

  @Post('favorite')
  @ApiOperation({
    summary: 'Favoritar jogo',
  })
  favorite(@Param('id') id: string, @Body() dto: FavoriteGameDto) {
    return this.gamesService.favorite(id, dto);
  }
}
