import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleErrorConstraintUnique } from 'src/utils/handle-error-unique.util';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { Genre } from './entities/genre.entity';

@Injectable()
export class GenresService {
  constructor(private readonly prisma: PrismaService) {}

  async verifyIdAndReturnGenre(id: string): Promise<Genre> {
    const genre: Genre = await this.prisma.genre.findUnique({ where: { id } });

    if (!genre) {
      throw new NotFoundException(`O id ${id} não é válido`);
    }
    return genre;
  }

  async create(dto: CreateGenreDto): Promise<Genre> {
    return await this.prisma.genre
      .create({ data: dto })
      .catch(handleErrorConstraintUnique);
  }

  findAll(): Promise<Genre[]> {
    return this.prisma.genre.findMany();
  }

  findOne(id: string): Promise<Genre> {
    return this.verifyIdAndReturnGenre(id);
  }

  async update(id: string, dto: UpdateGenreDto): Promise<Genre | void> {
    await this.verifyIdAndReturnGenre(id);

    return this.prisma.genre
      .update({ where: { id }, data: dto })
      .catch(handleErrorConstraintUnique);
  }

  async remove(id: string) {
    await this.verifyIdAndReturnGenre(id);

    return this.prisma.genre.delete({ where: { id }, select: { name: true } });
  }
}
