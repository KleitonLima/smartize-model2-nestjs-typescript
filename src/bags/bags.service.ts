import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
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

  handleErrorConstraintUnique(error: Error): never {
    const splitedMessage: string[] = error.message.split('`');

    const errorMessage = `O campo '${splitedMessage.at(
      -2,
    )}' não está respeitando a constraint UNIQUE`;

    throw new UnprocessableEntityException(errorMessage);
  }

  async create(dto: CreateBagDto): Promise<Bag | void> {
    return await this.prisma.bag
      .create({ data: dto })
      .catch(this.handleErrorConstraintUnique);
  }

  findAll(): Promise<Bag[]> {
    return this.prisma.bag.findMany();
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
