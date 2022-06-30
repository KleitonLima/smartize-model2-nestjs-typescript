import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Nome do usuário a ser criado',
    example: 'Kleiton',
  })
  name: string;

  @IsEmail()
  @ApiProperty({
    description: 'Email do usuário a ser criado',
    example: 'kleiton@email.com',
  })
  email: string;

  @MinLength(4)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha muito fraca',
  })
  @ApiProperty({
    description:
      'Senha do usuário a ser criado com no mínimo 4 caracteres, uma letra maiúscula, uma minúscula, um número e um símbolo',
    example: '@abc1',
  })
  password: string;
}
