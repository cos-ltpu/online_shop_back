import {Controller, Get, Param} from '@nestjs/common';
import {CategoriesService} from "./categories.service";

@Controller('api/categories')
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService) {
    }

    @Get()
    async getAllCategory() {
        return this.categoriesService.findAll();
    }

    @Get(':id')
    async getCategory(@Param('id') id: number) {
        return this.categoriesService.findOne(id);
    }

}
