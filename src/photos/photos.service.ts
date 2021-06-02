import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Photos} from "./entities/photos.entity";

@Injectable()
export class PhotosService {
    constructor(
        @InjectRepository(Photos) private readonly photosRepository: Repository<Photos>,
    ) {}

    async findAll(id: number): Promise<Photos[]> {
        return this.photosRepository.find({where: { article_id: id }});
    }

}
