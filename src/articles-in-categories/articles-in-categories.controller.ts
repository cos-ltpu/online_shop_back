import {Controller, Get, Param} from '@nestjs/common';
import {ArticlesInCategoriesService} from "./articles-in-categories.service";

@Controller('api/ainc')
export class ArticlesInCategoriesController {
    constructor(private readonly aincService: ArticlesInCategoriesService) {
    }

    @Get(':category_id' + '/articles')
    async getArticles(@Param('category_id')category_id: number) {
        return this.aincService.findByCategory(category_id)
    }

    @Get(':article_id' + '/categories' )
    async getCategories(@Param('article_id')article_id: number) {
        return this.aincService.findByArticle(article_id);
    }

}
