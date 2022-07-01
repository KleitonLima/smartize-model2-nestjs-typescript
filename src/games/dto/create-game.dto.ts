import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsUrl } from 'class-validator';

export class CreateGameDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Nome do jogo',
    example: 'God Of War',
  })
  name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Descrição do jogo',
    example: 'Esse jogo clássico, conta a estória de Kratos...',
  })
  description: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'O gênero do jogo',
    example: 'Ação e aventura',
  })
  genre: string;

  @IsNumber({
    maxDecimalPlaces: 2,
  })
  @ApiProperty({
    description: 'Preço do jogo',
    example: 29.99,
  })
  price: number;

  @IsUrl()
  @ApiProperty({
    description: 'Link da imagem do jogo',
    example: 'http://linkdaimagem',
  })
  image: string;
}
