import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsUrl, IsUUID } from 'class-validator';

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

  @IsUUID()
  @ApiProperty({
    description: 'Id do gênero do jogo',
    example: '7f2334a9-e2fb-40a6-a333-1d0ab8838916',
  })
  genreId: string;

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
