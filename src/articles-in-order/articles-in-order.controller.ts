import {Controller} from '@nestjs/common';
import {ArticlesInOrdersService} from "./articles-in-order.service";

@Controller('api/articlesInOrders')
export class ArticlesInOrdersController {

    constructor(private readonly ainoService: ArticlesInOrdersService) {
    }
}
