import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Articles} from "./entities/articles.entity";
import {edit} from "./search";
import {Photos} from "../photos/entities/photos.entity";
import {PhotosService} from "../photos/photos.service";

@Injectable()
export class ArticlesService {
    constructor(
        private readonly photosService: PhotosService,
        @InjectRepository(Articles) private readonly articlesRepository: Repository<Articles>,
    ) {}

    async findAll(): Promise<any | undefined> {
        const arts = await this.articlesRepository.find();
        for (let i = 0; i < arts.length; i++) {
            arts[i].photos = await this.photosService.findAll(arts[i].id)
        }
        return arts
    }

    async findOne(id: number): Promise<any | undefined> {
        const art = await this.articlesRepository.findOne({where: { id: id }})
        art.photos = await this.photosService.findAll(id)
        return art
    }

    async find(name: string): Promise<any | undefined> {
        let res = []

        const db = await this.articlesRepository.find();
        const nm = await edit(name);
        for (let k = 0; k < db.length; k++ ) {
            for (let i = 0; i < nm.length; i++)
            if ( db[k].name.includes(nm[i])) {
                db[k].photos = await this.photosService.findAll(db[k].id)
                res.push(db[k])
            }
        }
        return res
    }

    async inc(id: number, count: number) {
        const article = await this.articlesRepository.findOne({where: {id: id}})
        article.count = article.count - count
        await this.articlesRepository.update({id: id}, article)
    }
}
