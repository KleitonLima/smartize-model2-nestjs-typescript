import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { GamesModule } from './games/games.module';
import { CartsModule } from './carts/carts.module';

@Module({
  imports: [UsersModule, GamesModule, CartsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
