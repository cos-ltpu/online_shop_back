import {Injectable} from "@nestjs/common";
import {Connection, Repository} from "typeorm";
import {ArticlesService} from "../articles/articles.service";
import {InjectRepository} from "@nestjs/typeorm";
import {Cart} from "./entities/cart.entity";

@Injectable()
export class CartService {
    constructor(
        private readonly articlesService: ArticlesService,
        @InjectRepository(Cart) private readonly cartRepository: Repository<Cart>,
    ) {}

    async add(user_id: number, {article_id: article_id, count: count}) {
        const res = await this.cartRepository.findOne({where: {user_id: user_id, article_id: article_id}})
        if (!res) {
        const save = await this.cartRepository.create({user_id: user_id, article_id: article_id, count: count})
        await this.cartRepository.save(save);
        }
        else {
            await this.cartRepository.update({user_id: user_id, article_id: article_id}, {count: res.count+count})
        }
    }

    async del(user_id: number, {article_id: article_id}) {
        await this.cartRepository.remove((await this.cartRepository.findOne({where: {user_id: user_id, article_id: article_id}})))
    }

    async find(user_id: number) {

        let result = []
        const res = await this.cartRepository.find({where: {user_id: user_id}})
        for (let k = 0; k < res.length; k++ )
        {
            result[k] = await this.articlesService.findOne(res[k].article_id)
            result[k].count = res[k].count
        }
        return result
    }

    async delAll(user_id: number) {
        const res = await this.cartRepository.find({where: {user_id: user_id}})
        for (let i = 0; i < res.length; i++) {
            await this.cartRepository.remove((await this.cartRepository.findOne({where: {user_id: user_id}})))
        }
    }

    async change(user_id: number, {article_id: article_id, count: count}){
        const res = await this.cartRepository.findOne({where: {user_id: user_id, article_id: article_id}})
        if (!res) {
            const save = await this.cartRepository.create({user_id: user_id, article_id: article_id, count: count})
            await this.cartRepository.save(save);
        }
        else {
            await this.cartRepository.update({user_id: user_id, article_id: article_id}, {count: count})
        }
    }
}