import { Module } from '@nestjs/common';
import { FavoritesController } from './favorites.controller';
import { FavoritesService } from './favorites.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Favorites} from "./entities/favorites.entity";
import {ArticlesModule} from "../articles/articles.module";

@Module({
  imports: [TypeOrmModule.forFeature([Favorites]),
    ArticlesModule],
  controllers: [FavoritesController],
  providers: [FavoritesService],
  exports: [FavoritesService]
})
export class FavoritesModule {}
