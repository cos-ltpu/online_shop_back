import {Body, Controller, Post, Request, UseGuards} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {AuthGuard} from "@nestjs/passport";
import {LoginUserDto} from "./dto/login-user.dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Body() loginUserDto: LoginUserDto, @Request() req) {
        return this.authService.login(req.user);
    }
}
