import { Module } from '@nestjs/common';
import { PhotosController } from './photos.controller';
import { PhotosService } from './photos.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Photos} from "./entities/photos.entity";

@Module({
   imports: [TypeOrmModule.forFeature([Photos])],
  controllers: [PhotosController],
  providers: [PhotosService],
  exports: [PhotosService]
})
export class PhotosModule {


}
