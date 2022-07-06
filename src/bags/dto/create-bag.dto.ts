import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateBagDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Número da sacola',
    example: 3,
  })
  number: number;
}
