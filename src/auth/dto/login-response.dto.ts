import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../users/entities/users.entity';

export class LoginResponseDto {
  @ApiProperty({
    description: 'Token gerado pelo login',
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
  })
  token: string;

  @ApiProperty({
    description: 'Dados do usuário logado',
  })
  user: User;
}
