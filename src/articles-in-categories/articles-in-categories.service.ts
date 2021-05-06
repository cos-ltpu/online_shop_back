import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Categories} from "../categories/entities/categories.entity";
import {ArticlesInCategories} from "./entities/articles-in-categories.entity";
import {ArticlesService} from "../articles/articles.service";
import {CategoriesService} from "../categories/categories.service";

@Injectable()
export class ArticlesInCategoriesService {

    constructor(private readonly articlesService: ArticlesService,
                private readonly categoriesService: CategoriesService,
        @InjectRepository(ArticlesInCategories) private readonly aincRepository: Repository<ArticlesInCategories>,
        ) {}

    async findByCategory(category_id: number): Promise<ArticlesInCategories[] | undefined> {
        const result = []
        const ainc =  await this.aincRepository.find({where: {category_id: category_id}})
        for (let k = 0; k < ainc.length; k++ )
        {
            result[k] = await this.articlesService.findOne(ainc[k].article_id)
        }
        return result
    }

    async findByArticle(article_id: number): Promise<Categories[] | undefined> {
        const result = []
        const ainc = await this.aincRepository.find({where: {article_id: article_id}})
        for (let k = 0; k < ainc.length; k++ )
        {
            result[k] = await this.categoriesService.findOne(ainc[k].category_id)
        }
        return result
    }
}
