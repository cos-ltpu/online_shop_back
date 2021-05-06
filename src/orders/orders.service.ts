import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Orders} from "./entities/orders.entity";
import {CreateOrderDto} from "./dto/crete-order.dto";
import {ArticlesInOrderService} from "../articles-in-order/articles-in-order.service";
import {ArticlesService} from "../articles/articles.service";

@Injectable()
export class OrdersService {
    constructor(
        private readonly articlesInOrderService: ArticlesInOrderService,
        private readonly articlesService: ArticlesService,
        @InjectRepository(Orders) private readonly ordersRepository: Repository<Orders>,
    ) {}

    async createOrder(user_id: number, createOrderDto: CreateOrderDto) {
        try {

            createOrderDto.count = 0;
            createOrderDto.price = 0;

            for (let k = 0; k < createOrderDto.articles.length; k++ ) {
                if ( (await this.articlesService.findOne(createOrderDto.articles[k].id)).count < createOrderDto.articles[k].count)
                    throw new Error('Count is not correct')
                else
                    createOrderDto.count += createOrderDto.articles[k].count
                    createOrderDto.price += (await this.articlesService.findOne(createOrderDto.articles[k].id)).price * createOrderDto.articles[k].count
            }

            createOrderDto.user_id = user_id
            createOrderDto.status = 1
            createOrderDto.date = "" + new Date()

            const id = await this.getNextID();
            createOrderDto.id = id;

            const { articles, ...result } = createOrderDto;
            const order = await this.ordersRepository.create(result);
            await this.ordersRepository.save(order);

            console.log(order)
            for (let i = 0; i < createOrderDto.articles.length; i++ ) {
                let link = await this.articlesInOrderService.create(id, createOrderDto.articles[i].id, createOrderDto.articles[i].count)
                await this.articlesService.inc(createOrderDto.articles[i].id, createOrderDto.articles[i].count)
            }
        }
        catch (e) {
            return {
                message: 'Order was not created'
            }
        }
    }

    async getNextID() {
        const orders = await this.ordersRepository.find()
        let maxID = 0
        for (let k = 0; k < orders.length; k++ ) {
            if (orders[k].id > maxID) {
                maxID = orders[k].id
            }
        }
        return (maxID + 1)
    }

    async findById(user_id: number){
        return this.ordersRepository.find({where: {user_id: user_id}})
    }
}
