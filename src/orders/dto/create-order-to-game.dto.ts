import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class CreateOrderToGameDto {
  @IsUUID()
  @ApiProperty({
    description: 'Id do pedido',
    example: 'a966f158-6dec-454c-9c72-9af6c90a8062',
  })
  orderId: string;

  @IsUUID()
  @ApiProperty({
    description: 'Id do jogo',
    example: 'a966f158-6dec-454c-9c72-9af6c90a8062',
  })
  gameId: string;
}
