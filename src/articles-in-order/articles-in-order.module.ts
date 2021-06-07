import { Module } from '@nestjs/common';
import { ArticlesInOrdersService } from './articles-in-order.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ArticlesInOrders} from "./entities/articles-in-order.entity";
import {ArticlesInOrdersController} from "./articles-in-order.controller";
import {ArticlesModule} from "../articles/articles.module";

@Module({
  imports: [TypeOrmModule.forFeature([ArticlesInOrders]), ArticlesModule],
  controllers: [ArticlesInOrdersController],
  providers: [ArticlesInOrdersService],
  exports: [ArticlesInOrdersService]
})
export class ArticlesInOrdersModule {}
