import {Body, Controller, Headers, HttpCode, Post, Request, UseGuards} from '@nestjs/common';
import {OrdersService} from "./orders.service";
import {CreateOrderDto} from "./dto/crete-order.dto";
import {AuthGuard} from "@nestjs/passport";

@Controller('orders')
export class OrdersController {

    constructor(private readonly ordersService: OrdersService) {
    }

    @UseGuards(AuthGuard('jwt'))
    @HttpCode(200)
    @Post('new-order')
    async newOrder(@Headers("token") token: string, @Request() req, @Body() createOrderDto: CreateOrderDto) {
        return this.ordersService.createOrder(req.user.id, createOrderDto);
    }
}
