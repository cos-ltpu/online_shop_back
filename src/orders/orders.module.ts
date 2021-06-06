import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Orders} from "./entities/orders.entity";
import {ArticlesInOrdersModule} from "../articles-in-order/articles-in-order.module";
import {ArticlesModule} from "../articles/articles.module";
import {CartModule} from "../cart/cart.module";

@Module({
  imports: [TypeOrmModule.forFeature([Orders]), ArticlesInOrdersModule, ArticlesModule, CartModule],
  controllers: [OrdersController],
  providers: [OrdersService],
  exports: [OrdersService]
})
export class OrdersModule {}
