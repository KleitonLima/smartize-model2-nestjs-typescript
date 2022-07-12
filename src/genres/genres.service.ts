import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';

@Injectable()
export class GenresService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateGenreDto) {
    return dto;
  }

  findAll() {
    return `This action returns all genres`;
  }

  findOne(id: string) {
    return `This action returns a #${id} genre`;
  }

  update(id: string, dto: UpdateGenreDto) {
    return `This action updates a #${dto} genre`;
  }

  remove(id: string) {
    return `This action removes a #${id} genre`;
  }
}
