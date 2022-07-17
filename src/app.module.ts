import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { GamesModule } from './games/games.module';
import { BagsModule } from './bags/bags.module';
import { GenresModule } from './genres/genres.module';
import { OrdersModule } from './orders/orders.module';
import { FavoritesModule } from './favorites/favorites.module';

@Module({
  imports: [UsersModule, GamesModule, BagsModule, GenresModule, OrdersModule, FavoritesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
