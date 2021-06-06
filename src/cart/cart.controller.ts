import {Body, Controller, Get, Headers, HttpCode, Post, Request, UseGuards} from '@nestjs/common';
import {AuthGuard} from "@nestjs/passport";
import {ApiBearerAuth} from "@nestjs/swagger";
import {CartService} from "./cart.service";
import {CartDto} from "./dto/cart.dto"

@Controller('api/cart')
export class CartController {

    constructor(private readonly cartService: CartService) {
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @HttpCode(200)
    @Post('add')
    async Add(@Request() req, @Body() CartDto: CartDto) {
        return this.cartService.add(req.user.id, CartDto);
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @HttpCode(200)
    @Post('del')
    async Del(@Request() req, @Body() CartDto: CartDto) {
        return this.cartService.del(req.user.id, CartDto);
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @HttpCode(200)
    @Get('find')
    async Find(@Request() req) {
        return this.cartService.find(req.user.id);
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @HttpCode(200)
    @Post('delAll')
    async DelAll(@Request() req) {
        await this.cartService.delAll(req.user.id);
    }
}