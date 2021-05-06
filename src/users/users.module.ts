import { Module } from '@nestjs/common';
import {UsersController} from './users.controller';
import {UsersService} from './users.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Users} from "./entities/users.entity";
import {OrdersModule} from "../orders/orders.module";
import {FavoritesModule} from "../favorites/favorites.module";

@Module({
  imports: [TypeOrmModule.forFeature([Users]), OrdersModule, FavoritesModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}