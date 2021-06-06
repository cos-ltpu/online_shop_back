import {IsDate, IsNotEmpty, IsNumber, IsPhoneNumber, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CartDto {
    @ApiProperty() @IsNotEmpty()
    article_id: number;
}