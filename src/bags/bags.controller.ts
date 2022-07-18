import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { BagsService } from './bags.service';
import { CreateBagDto } from './dto/create-bag.dto';
import { UpdateBagDto } from './dto/update-bag.dto';
import { Bag } from './entities/bag.entity';

@UseGuards(AuthGuard())
@ApiTags('bags')
@ApiBearerAuth()
@Controller('bags')
export class BagsController {
  constructor(private readonly bagsService: BagsService) {}

  @Post()
  @ApiOperation({
    summary: 'Criar nova bag',
  })
  create(@Body() dto: CreateBagDto): Promise<Bag | void> {
    return this.bagsService.create(dto);
  }

  @Get()
  @ApiOperation({
    summary: 'Exibir todas as bags',
  })
  findAll(): Promise<Bag[]> {
    return this.bagsService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Exibir uma bag',
  })
  findOne(@Param('id') id: string): Promise<Bag> {
    return this.bagsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualizar uma bag',
  })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateBagDto,
  ): Promise<Bag | void> {
    return this.bagsService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Excluir uma bag',
  })
  remove(@Param('id') id: string) {
    return this.bagsService.remove(id);
  }
}
