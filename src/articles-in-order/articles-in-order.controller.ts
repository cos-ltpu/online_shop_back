import {Controller} from '@nestjs/common';
import {ArticlesInOrdersService} from "./articles-in-order.service";

@Controller('articlesInOrders')
export class ArticlesInOrdersController {

    constructor(private readonly ainoService: ArticlesInOrdersService) {
    }
}
