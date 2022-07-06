import { PartialType } from '@nestjs/swagger';
import { CreateBagDto } from './create-bag.dto';

export class UpdateBagDto extends PartialType(CreateBagDto) {}
