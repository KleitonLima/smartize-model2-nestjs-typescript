import { Injectable } from '@nestjs/common';
import { CreateBagDto } from './dto/create-bag.dto';
import { UpdateBagDto } from './dto/update-bag.dto';

@Injectable()
export class BagsService {
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
