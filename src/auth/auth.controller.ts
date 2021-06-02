import {Body, Controller, Post, Request, UseGuards} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {AuthGuard} from "@nestjs/passport";
import {LoginUserDto} from "./dto/login-user.dto";

@Controller()
export class AuthController {
    constructor(private authService: AuthService) {}

    @UseGuards(AuthGuard('local'))
    @Post('api/login')
    async login(@Body() loginUserDto: LoginUserDto, @Request() req) {
        return this.authService.login(req.user);
    }

    @UseGuards(AuthGuard('local'))
    @Post('api/check')
    async check(@Request() req) {
        let stat = false
        if (req) stat = true
        return {
            active: stat,
        };
    }

}
