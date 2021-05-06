import { Module } from '@nestjs/common';
import { ArticlesInCategoriesController } from './articles-in-categories.controller';
import { ArticlesInCategoriesService } from './articles-in-categories.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ArticlesInCategories} from "./entities/articles-in-categories.entity";
import {ArticlesModule} from "../articles/articles.module";
import {CategoriesModule} from "../categories/categories.module";

@Module({
  imports: [TypeOrmModule.forFeature([ArticlesInCategories]),
            ArticlesModule,
            CategoriesModule],
  controllers: [ArticlesInCategoriesController],
  providers: [ArticlesInCategoriesService],
  exports: [ArticlesInCategoriesService]
})
export class ArticlesInCategoriesModule {}
