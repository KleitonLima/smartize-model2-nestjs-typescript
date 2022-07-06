import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CartsService } from './carts.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Controller('carts')
export class CartsController {
  constructor(private readonly cartsService: CartsService) {}

  @Post()
  create(@Body() dto: CreateCartDto) {
    return this.cartsService.create(dto);
  }

  @Get()
  findAll() {
    return this.cartsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateCartDto) {
    return this.cartsService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartsService.remove(id);
  }
}
