import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Users} from "./entities/users.entity";
import {Repository} from "typeorm";
import {CreateUserDto} from "./dto/create-user.dto";
import * as bcrypt from 'bcrypt';
import {OrdersService} from "../orders/orders.service";
import {Orders} from "../orders/entities/orders.entity";
import {FavoritesService} from "../favorites/favorites.service";

@Injectable()
export class UsersService {
    constructor(
        private readonly ordersService: OrdersService,
        private readonly favoritesService: FavoritesService,
        @InjectRepository(Users) private readonly usersRepository: Repository<Users>,
    ) {}

    async findAll(): Promise<Users[]> {
        return this.usersRepository.find();
    }

    async findByEmail(email: string): Promise<Users | undefined> {
        return this.usersRepository.findOne( {where: { email: email }})
    }

    async findById(id: string): Promise<Users | undefined> {
        return this.usersRepository.findOne( {where: { id: id }})
    }

    async createUser(createUserDto: CreateUserDto) {
        try {
            const salt = await bcrypt.genSalt();
            createUserDto.password = await bcrypt.hash(createUserDto.password, salt);
            const user = await this.usersRepository.create(createUserDto);
            await this.usersRepository.save(user);
        }
        catch (e) {
            return {
                message: 'Error'
            }
        }
    }

    async getOrders(id: number): Promise<Orders[] | undefined> {
        return this.ordersService.findById(id)
    }

    async getFavorites(id: number) {
        return this.favoritesService.findById(id)
    }
}
