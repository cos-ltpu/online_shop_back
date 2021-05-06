import {IsEmail, IsNotEmpty} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateFavoriteDto {
    user_id: number;

    @ApiProperty() @IsNotEmpty()
    article_id: number;
}