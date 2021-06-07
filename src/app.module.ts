import { Module } from '@nestjs/common';
import { AppController } from "./app.controller";
import { UsersModule } from './users/users.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import { ArticlesModule } from './articles/articles.module';
import { OrdersModule } from './orders/orders.module';
import { ReviewsModule } from './reviews/reviews.module';
import { PhotosModule } from './photos/photos.module';
import { CategoriesModule } from './categories/categories.module';
import { FavoritesModule } from './favorites/favorites.module';
import { ArticlesInOrdersModule } from './articles-in-order/articles-in-order.module';
import { AuthModule } from './auth/auth.module';
import {ArticlesInCategoriesModule} from "./articles-in-categories/articles-in-categories.module";
import {MinioModule} from "nestjs-minio-client";
import {CartModule} from "./cart/cart.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    ArticlesModule,
    OrdersModule,
    ReviewsModule,
    PhotosModule,
    CategoriesModule,
    FavoritesModule,
    ArticlesInOrdersModule,
    AuthModule,
    ArticlesInCategoriesModule,
      CartModule,
    MinioModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
