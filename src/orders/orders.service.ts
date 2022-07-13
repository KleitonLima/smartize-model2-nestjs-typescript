import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  private orderSelect = {
    id: true,
    createdAt: true,
    bagNumber: true,
    user: {
      select: {
        id: true,
        name: true,
      },
    },
    games: {
      select: {
        name: true,
      },
    },
  };

  create(dto: CreateOrderDto) {
    const data: Prisma.OrderCreateInput = {
      bag: {
        connect: {
          number: dto.bagNumber,
        },
      },
      user: {
        connect: {
          id: dto.userId,
        },
      },
      game: {
        connect: dto.games.map((element) => ({ id: element })),
      },
    };

    return this.prisma.order.create({
      data,
      select: this.orderSelect,
    });
  }

  findAll() {
    return this.prisma.order.findMany({
      select: this.orderSelect,
    });
  }

  findOne(id: string) {
    return this.prisma.order.findUnique({
      where: { id },
      select: this.orderSelect,
    });
  }
}
