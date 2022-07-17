import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class FavoriteGameDto {
  @IsUUID()
  @ApiProperty({
    description: 'Id do usuário que favoritou o jogo',
    example: '111fd9ba-86d8-42ad-a8c2-b547c5671245',
  })
  userId: string;

  @IsUUID()
  @ApiProperty({
    description: 'Id do jogo que está favoritado',
    example: '111fd9ba-86d8-42ad-a8c2-b547c5671245',
  })
  gameId: string;
}
