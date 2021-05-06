import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Articles} from "./entities/articles.entity";

@Injectable()
export class ArticlesService {
    constructor(
        @InjectRepository(Articles) private readonly articlesRepository: Repository<Articles>,
    ) {}

    async findAll(): Promise<Articles[]> {
        return this.articlesRepository.find();
    }

    async findOne(id: number): Promise<Articles | undefined> {
        return this.articlesRepository.findOne({where: { id: id }})
    }

    async find(name: string): Promise<Articles[] | undefined> {
        return this.articlesRepository.find({where: { name: name }})
    }

    async inc(id: number, count: number) {
        const article = await this.articlesRepository.findOne({where: {id: id}})
        article.count = article.count - count
        await this.articlesRepository.update({id: id}, article)
    }
}
