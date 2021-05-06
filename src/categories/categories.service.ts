import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Categories} from "./entities/categories.entity";

@Injectable()
export class CategoriesService {

    constructor(
        @InjectRepository(Categories) private readonly categoriesRepository: Repository<Categories>,
    ) {}

    async findAll(): Promise<Categories[]> {
        return this.categoriesRepository.find();
    }

    async findOne(id: number): Promise<Categories | undefined> {
        return this.categoriesRepository.findOne({where: { id }})
    }
}
