import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Injectable()
export class CartsService {
  create(dto: CreateCartDto) {
    return 'This action adds a new cart';
  }

  findAll() {
    return `This action returns all carts`;
  }

  findOne(id: string) {
    return `This action returns a #${id} cart`;
  }

  update(id: string, dto: UpdateCartDto) {
    return `This action updates a #${id} cart`;
  }

  remove(id: string) {
    return `This action removes a #${id} cart`;
  }
}
