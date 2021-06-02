import {Body, Controller, Headers, HttpCode, Post, Request, UseGuards} from '@nestjs/common';
import {OrdersService} from "./orders.service";
import {CreateOrderDto} from "./dto/crete-order.dto";
import {AuthGuard} from "@nestjs/passport";
import {ApiBearerAuth} from "@nestjs/swagger";

@Controller('orders')
export class OrdersController {

    constructor(private readonly ordersService: OrdersService) {
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @HttpCode(200)
    @Post('new-order')
    async newOrder(@Request() req, @Body() createOrderDto: CreateOrderDto) {
        return this.ordersService.createOrder(req.user.id, createOrderDto);
    }
}
