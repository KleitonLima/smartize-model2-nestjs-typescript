import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BagsService } from './bags.service';
import { CreateBagDto } from './dto/create-bag.dto';
import { UpdateBagDto } from './dto/update-bag.dto';
import { Bag } from './entities/bag.entity';

@Controller('bags')
export class BagsController {
  constructor(private readonly bagsService: BagsService) {}

  @Post()
  create(@Body() dto: CreateBagDto): Promise<Bag | void> {
    return this.bagsService.create(dto);
  }

  @Get()
  findAll(): Promise<Bag[]> {
    return this.bagsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Bag> {
    return this.bagsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateBagDto,
  ): Promise<Bag | void> {
    return this.bagsService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bagsService.remove(id);
  }
}
