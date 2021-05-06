import { Module } from '@nestjs/common';
import { ArticlesInOrderService } from './articles-in-order.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ArticlesInOrders} from "./entities/articles-in-order.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ArticlesInOrders])],
  providers: [ArticlesInOrderService],
  exports: [ArticlesInOrderService]
})
export class ArticlesInOrderModule {}
