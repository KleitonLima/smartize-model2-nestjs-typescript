import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive, IsUUID } from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'Número da sacola que fez o pedido',
    example: 5,
  })
  bagNumber: number;

  @IsUUID()
  @ApiProperty({
    description: 'Id do usuário que fez o pedido',
    example: 'b70df1e5-05cc-4c77-9102-b4e7b7ee3062',
  })
  userId: string;

  @IsUUID(undefined, { each: true })
  @ApiProperty({
    description: `Lista de id's dos produtos dentro do pedido`,
    example: `['b70df1e5-05cc-4c77-9102-b4e7b7ee3062','b70df1e5-05cc-4c77-9102-b4e7b7ee3062' ]`,
  })
  games: string[];
}
