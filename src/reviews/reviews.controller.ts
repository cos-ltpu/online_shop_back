import {Body, Controller, Get, Headers, HttpCode, Param, Post, Request, UseGuards} from '@nestjs/common';
import {AuthGuard} from "@nestjs/passport";
import {ReviewsService} from "./reviews.service";
import { CreateReviewDto } from "./dto/create-review.dto"
import {ApiBearerAuth} from "@nestjs/swagger";

@Controller('reviews')
export class ReviewsController {
    constructor(private readonly reviewsService: ReviewsService) {
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @HttpCode(200)
    @Post('create')
    async newFavorite(@Request() req, @Body() createReviewDto: CreateReviewDto) {
        return this.reviewsService.createReviews(req.user.id, createReviewDto);
    }

    @Get(':article_id')
    async getReviews(@Param('article_id') article_id: number) {
        return this.reviewsService.findByArticle(article_id);
    }

}
