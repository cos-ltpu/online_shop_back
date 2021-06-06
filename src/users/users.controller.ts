import {Body, Controller, Get, Headers, HttpCode, Post, Request, UseGuards} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {AuthGuard} from "@nestjs/passport";
import { ApiBearerAuth } from '@nestjs/swagger';


@Controller()
export class UsersController {
    constructor(private readonly usersService: UsersService) {
    }

    @HttpCode(200)
    @Post('api/register')
    async newUser(@Body() createUserDto: CreateUserDto) {
        return this.usersService.createUser(createUserDto);
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Get('api/profile')
    getProfile( @Request() req) {
        return this.usersService.findById(req.user.id);
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Get('api/profile/favorites')
    async getFavorites(@Request() req) {
        return this.usersService.getFavorites(req.user.id);
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Get('api/profile/orders')
    async getOrders(@Request() req) {
        return this.usersService.getOrders(req.user.id);
    }
}