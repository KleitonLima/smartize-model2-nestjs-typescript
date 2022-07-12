import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGenreDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Nome da categoria',
    example: 'Ação e aventura',
  })
  name: string;
}
