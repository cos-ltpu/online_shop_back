import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Cart} from "./entities/cart.entity";
import {CartService} from "./cart.service";
import {CartController} from "./cart.controller";
import {ArticlesModule} from "../articles/articles.module";

@Module({
    imports: [TypeOrmModule.forFeature([Cart]), ArticlesModule],
    controllers: [CartController],
    providers: [CartService],
    exports: [CartService]
})
export class CartModule {}