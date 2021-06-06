import {Body, Controller, Headers, HttpCode, Post, Request, UseGuards} from '@nestjs/common';
import {FavoritesService} from "./favorites.service";
import {CreateFavoriteDto} from "./dto/create-favorite.dto";
import {DeleteFavoriteDto} from "./dto/delete-favorite.dto";
import {AuthGuard} from "@nestjs/passport";
import {ApiBearerAuth} from "@nestjs/swagger";

@Controller('api/favorites')
export class FavoritesController {
    constructor(private readonly favoritesService: FavoritesService) {
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @HttpCode(200)
    @Post('follow')
    async newFavorite(@Request() req, @Body() createFavoriteDto: CreateFavoriteDto) {
        return this.favoritesService.createFavorite(req.user.id, createFavoriteDto);
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @HttpCode(200)
    @Post('remove')
    async delFavorite(@Request() req, @Body() deleteFavoriteDto: DeleteFavoriteDto) {
        return this.favoritesService.deleteFavorite(req.user.id, deleteFavoriteDto);
    }
}
