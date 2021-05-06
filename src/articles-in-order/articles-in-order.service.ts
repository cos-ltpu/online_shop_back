import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {ArticlesInOrders} from "./entities/articles-in-order.entity";
import {Repository} from "typeorm";

@Injectable()
export class ArticlesInOrderService {

    constructor(
    @InjectRepository(ArticlesInOrders) private readonly ainoRepository: Repository<ArticlesInOrders>,
    ) {}

    async create(order_id: number, article_id: number, count: number) {
        try {
            const link = this.ainoRepository.create({order_id: order_id, article_id: article_id, count: count})
            await this.ainoRepository.save(link)
        } catch (e) {
            return {
                message: 'Error'
            }
        }
    }

}
