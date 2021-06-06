import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Connection, Repository} from "typeorm";
import {Orders} from "./entities/orders.entity";
import {CreateOrderDto} from "./dto/crete-order.dto";
import {ArticlesInOrdersService} from "../articles-in-order/articles-in-order.service";
import {ArticlesService} from "../articles/articles.service";
import {CartService} from "../cart/cart.service";

@Injectable()
export class OrdersService {
    constructor(
        private connection: Connection,
        private readonly cartService: CartService,
        private readonly articlesInOrdersService: ArticlesInOrdersService,
        private readonly articlesService: ArticlesService,
        @InjectRepository(Orders) private readonly ordersRepository: Repository<Orders>,
    ) {}

     async createOrder(user_id: number, createOrderDto: CreateOrderDto) {
        createOrderDto.count = 0;
        createOrderDto.price = 0;
        createOrderDto.user_id = user_id;
        createOrderDto.status = 1;
        createOrderDto.date = "" + new Date();

        const cart = await this.cartService.find(user_id)

         let array = []
        for (let i=0; i<cart.length; i++) {
            array[i]={id: cart[i].article_id, count: 1}
        }
        createOrderDto.articles = array

        const id = await this.getNextID();
        createOrderDto.id = id;
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {

            for (let k = 0; k < createOrderDto.articles.length; k++ ) {
                if ((await this.articlesService.findOne(createOrderDto.articles[k].id)).count < createOrderDto.articles[k].count) {
                    throw new Error('Count is not correct')
                }
                else {
                    createOrderDto.count += createOrderDto.articles[k].count
                    createOrderDto.price += (await this.articlesService.findOne(createOrderDto.articles[k].id)).price * createOrderDto.articles[k].count
                }
            }
            const { articles, ...result } = createOrderDto;
            const res = await this.ordersRepository.create(result)
            await queryRunner.manager.save(res);
            let list = []

            for (let i = 0; i < createOrderDto.articles.length; i++ ) {
                list.push({order_id: id, article_id: createOrderDto.articles[i].id, count: createOrderDto.articles[i].count})
            }
            await this.articlesInOrdersService.createMany(list)
            await queryRunner.commitTransaction();
            await this.cartService.delAll(user_id);
        }
        catch (e) {
            await queryRunner.rollbackTransaction();
            return {
                message: 'Order was not created'
            }
        } finally {
            await queryRunner.release();
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
