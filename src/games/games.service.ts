import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './entities/game.entity';

@Injectable()
export class GamesService {
  constructor(private readonly prisma: PrismaService) {}

  async verifyIdAndReturnGame(id: string): Promise<Game> {
    const game: Game = await this.prisma.game.findUnique({ where: { id } });

    if (!game) {
      throw new NotFoundException(`O id ${id} não é válido`);
    }
    return game;
  }

  handleErrorConstraintUnique(error: Error): never {
    const splitedMessage = error.message.split('`');

    const errorMessage = `O campo '${
      splitedMessage[splitedMessage.length - 2]
    }' não está respeitando a constraint UNIQUE`;

    throw new UnprocessableEntityException(errorMessage);
  }

  async create(dto: CreateGameDto): Promise<Game | void> {
    return await this.prisma.game
      .create({ data: dto })
      .catch(this.handleErrorConstraintUnique);
  }

  findAll(): Promise<Game[]> {
    return this.prisma.game.findMany();
  }

  findOne(id: string): Promise<Game | void> {
    return this.verifyIdAndReturnGame(id);
  }

  async update(id: string, dto: UpdateGameDto): Promise<Game | void> {
    await this.verifyIdAndReturnGame(id);

    return this.prisma.game.update({ where: { id }, data: dto });
  }

  async remove(id: string) {
    await this.verifyIdAndReturnGame(id);

    return this.prisma.game
      .delete({
        where: { id },
        select: { name: true, price: true },
      })
      .catch(this.handleErrorConstraintUnique);
  }
}
