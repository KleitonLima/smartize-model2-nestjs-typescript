import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'User name',
    example: 'Kleiton',
  })
  name: string;

  @IsEmail()
  @ApiProperty({
    description: 'User email',
    example: 'kleiton@email.com',
  })
  email: string;

  @IsAlphanumeric()
  @ApiProperty({
    description: 'User password',
    example: 'klei123',
  })
  password: string;
}
