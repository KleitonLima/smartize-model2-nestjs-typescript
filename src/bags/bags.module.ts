import { Module } from '@nestjs/common';
import { BagsService } from './bags.service';
import { BagsController } from './bags.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PrismaModule, PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [BagsController],
  providers: [BagsService],
})
export class BagsModule {}
