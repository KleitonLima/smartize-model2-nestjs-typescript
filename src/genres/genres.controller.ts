import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GenresService } from './genres.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Genre } from '@prisma/client';

@ApiTags('genres')
@Controller('genres')
export class GenresController {
  constructor(private readonly genresService: GenresService) {}

  @Post()
  @ApiOperation({
    summary: 'Criar novo gênero',
  })
  create(@Body() dto: CreateGenreDto): Promise<Genre> {
    return this.genresService.create(dto);
  }

  @Get()
  @ApiOperation({
    summary: 'Exibir todos os gêneros',
  })
  findAll(): Promise<Genre[]> {
    return this.genresService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Exibir um gênero',
  })
  findOne(@Param('id') id: string): Promise<Genre> {
    return this.genresService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualizar um gênero',
  })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateGenreDto,
  ): Promise<Genre | void> {
    return this.genresService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Deletar um jogo',
  })
  remove(@Param('id') id: string) {
    return this.genresService.remove(id);
  }
}
