import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

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
      games: {
        connect: dto.games.map((element) => ({ id: element })),
      },
    };

    return this.prisma.order.create({
      data,
      select: {
        id: true,
        createdAt: true,
        bagNumber: true,
        userId: true,
        games: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  findAll() {
    return `This action returns all orders`;
  }

  findOne(id: string) {
    return `This action returns a #${id} order`;
  }

  update(id: string, dto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: string) {
    return `This action removes a #${id} order`;
  }
}
