import {Controller, Get, Param} from '@nestjs/common';
import {ArticlesService} from "./articles.service";

@Controller('api/articles')
export class ArticlesController {
    constructor(private readonly articlesService: ArticlesService) {
    }

    @Get()
    async getAllArticles() {
        return this.articlesService.findAll();
    }

    @Get(':id')
    async getArticle(@Param('id') id: number) {
        return this.articlesService.findOne(id);
    }

    @Get('search/' + ':name')
    async Search(@Param('name') name: string) {
        return this.articlesService.find(name);
    }
}
