import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { GamesModule } from './games/games.module';
import { BagsModule } from './bags/bags.module';

@Module({
  imports: [UsersModule, GamesModule, BagsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
