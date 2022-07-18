import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleErrorConstraintUnique } from 'src/utils/handle-error-unique.util';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  async verifyIdAndReturnOrder(id: string): Promise<Order> {
    const order: Order = await this.prisma.order.findUnique({ where: { id } });

    if (!order) {
      throw new NotFoundException(`O id ${id} não é válido`);
    }
    return order;
  }

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
    // games: {
    //   select: {
    //     game: {
    //       select: {
    //         name: true,
    //       },
    //     },
    //   },
    // },
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
      games: {
        createMany: {
          data: dto.games.map((element) => ({ id: element })),
        },
      },
    };

    return this.prisma.order
      .create({
        data,
        select: this.orderSelect,
      })
      .catch(handleErrorConstraintUnique);
  }

  findAll() {
    return this.prisma.order.findMany({
      select: this.orderSelect,
    });
  }

  async findOne(id: string) {
    await this.verifyIdAndReturnOrder(id);

    return this.prisma.order.findUnique({
      where: { id },
      select: this.orderSelect,
    });
  }
}
