import { Module } from '@nestjs/common';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Articles} from "./entities/articles.entity";
import {PhotosModule} from "../photos/photos.module";

@Module({
  imports: [TypeOrmModule.forFeature([Articles]), PhotosModule],
  controllers: [ArticlesController],
  providers: [ArticlesService],
  exports: [ArticlesService]
})
export class ArticlesModule {}
