import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {ArticlesInOrders} from "./entities/articles-in-order.entity";
import {Repository} from "typeorm";
import {Connection} from "typeorm";

@Injectable()
export class ArticlesInOrdersService {

    constructor(
        private connection: Connection,
        @InjectRepository(ArticlesInOrders) private readonly articlesInOrdersRepository: Repository<ArticlesInOrders>,
    ) {}

    async create(order_id: number, article_id: number, count: number) {
        try {
            const link = this.articlesInOrdersRepository.create({order_id: order_id, article_id: article_id, count: count})
            await this.articlesInOrdersRepository.save(link)
        } catch (e) {
            return {
                message: 'Error'
            }
        }
    }

    async createMany(list: {order_id: number, article_id: number, count: number}[]) {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
    try{
        for (let k = 0; k < list.length; k++ ){
            const res = await this.articlesInOrdersRepository.create(list[k])
            await this.articlesInOrdersRepository.save(res)
            await queryRunner.manager.save(res)
        }
        await queryRunner.commitTransaction();
    } catch (err) {
        await queryRunner.rollbackTransaction();
    } finally {
        await queryRunner.release();
    }
}

}
