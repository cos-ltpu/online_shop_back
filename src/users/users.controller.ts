import {Body, Controller, Get, Headers, HttpCode, Post, Request, UseGuards} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {AuthGuard} from "@nestjs/passport";


@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {
    }

    @HttpCode(200)
    @Post('register')
    async newUser(@Body() createUserDto: CreateUserDto) {
        return this.usersService.createUser(createUserDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    getProfile(@Headers("token") token: string, @Request() req) {
        return this.usersService.findById(req.user.id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('profile/favorites')
    async getFavorites(@Headers("token") token: string, @Request() req) {
        return this.usersService.getFavorites(req.user.id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('profile/orders')
    async getOrders(@Headers("token") token: string, @Request() req) {
        return this.usersService.getOrders(req.user.id);
    }
}