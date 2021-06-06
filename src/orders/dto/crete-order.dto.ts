import {IsDate, IsNotEmpty, IsNumber, IsPhoneNumber, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateOrderDto {
    id: number;

    user_id: number;

    @ApiProperty() @IsNotEmpty() @IsString()
    first_name: string;

    @ApiProperty() @IsNotEmpty() @IsString()
    surname: string;

    @ApiProperty() @IsNotEmpty() @IsPhoneNumber()
    phone: string;

    @ApiProperty() @IsNotEmpty() @IsString()
    address: string;

    price: number;

    count: number;

    date: string;

    status: number;

    articles: {id: number, count: number }[]
}