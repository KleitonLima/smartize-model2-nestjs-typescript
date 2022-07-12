import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleErrorConstraintUnique } from 'src/util/handle-error-unique.util';
import { CreateBagDto } from './dto/create-bag.dto';
import { UpdateBagDto } from './dto/update-bag.dto';
import { Bag } from './entities/bag.entity';

@Injectable()
export class BagsService {
  constructor(private readonly prisma: PrismaService) {}

  async verifyIdAndReturnBag(id: string): Promise<Bag> {
    const bag: Bag = await this.prisma.bag.findUnique({ where: { id } });

    if (!bag) {
      throw new NotFoundException(`O id ${id} não é válido`);
    }
    return bag;
  }

  async create(dto: CreateBagDto): Promise<Bag | void> {
    return await this.prisma.bag
      .create({ data: dto })
      .catch(handleErrorConstraintUnique);
  }

  findAll(): Promise<Bag[]> {
    return this.prisma.bag.findMany();
  }

  findOne(id: string): Promise<Bag> {
    return this.verifyIdAndReturnBag(id);
  }

  async update(id: string, dto: UpdateBagDto): Promise<Bag | void> {
    await this.verifyIdAndReturnBag(id);

    return this.prisma.bag
      .update({ where: { id }, data: dto })
      .catch(handleErrorConstraintUnique);
  }

  async remove(id: string) {
    await this.verifyIdAndReturnBag(id);

    return this.prisma.bag.delete({ where: { id }, select: { number: true } });
  }
}
