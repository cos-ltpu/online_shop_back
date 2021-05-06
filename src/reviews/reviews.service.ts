import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import { CreateReviewDto } from "./dto/create-review.dto"
import {Reviews} from "./entities/reviews.entity";

@Injectable()
export class ReviewsService {

    constructor(
        @InjectRepository(Reviews) private readonly reviewsRepository: Repository<Reviews>,
    ) {}

    async createReviews(user_id: number, createReviewDto: CreateReviewDto){
        try {
            createReviewDto.author_id = user_id
            const link = await this.reviewsRepository.create(createReviewDto);
            await this.reviewsRepository.save(link);
        }
        catch (e) {
            return {
                message: 'Error'
            }
        }
    }

    async findByArticle(article_id: number): Promise<Reviews[] | undefined> {
        return this.reviewsRepository.find({where: {article_id: article_id}})
    }
}
