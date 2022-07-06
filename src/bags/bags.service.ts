import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBagDto } from './dto/create-bag.dto';
import { UpdateBagDto } from './dto/update-bag.dto';

@Injectable()
export class BagsService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateBagDto) {
    return 'This action adds a new bag';
  }

  findAll() {
    return `This action returns all bags`;
  }

  findOne(id: string) {
    return `This action returns a #${id} bag`;
  }

  update(id: string, dto: UpdateBagDto) {
    return `This action updates a #${id} bag`;
  }

  remove(id: string) {
    return `This action removes a #${id} bag`;
  }
}
