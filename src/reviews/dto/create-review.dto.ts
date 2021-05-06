import {IsEmail, IsNotEmpty} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateReviewDto {
    author_id: number;

    @ApiProperty() @IsNotEmpty() @IsEmail()
    article_id: number;

    @ApiProperty()
    grade: number;

    @ApiProperty()
    content: string;
}