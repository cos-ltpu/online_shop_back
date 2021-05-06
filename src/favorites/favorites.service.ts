import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Favorites} from "./entities/favorites.entity";
import {ArticlesService} from "../articles/articles.service";
import {CreateFavoriteDto} from "./dto/create-favorite.dto";
import {DeleteFavoriteDto} from "./dto/delete-favorite.dto";

@Injectable()
export class FavoritesService {
    constructor(
        private readonly articlesService: ArticlesService,
        @InjectRepository(Favorites) private readonly favoritesRepository: Repository<Favorites>,
    ) {}

    async findById(user_id: number) {
        const result = []
        const fav_list = await this.favoritesRepository.find({where: { user_id: user_id }})
        for (let k = 0; k < fav_list.length; k++ )
        {
            result[k] = await this.articlesService.findOne(fav_list[k].article_id)
        }
        return result
    }

    async createFavorite(user_id: number, createFavoriteDto: CreateFavoriteDto){
        try {
            createFavoriteDto.user_id = user_id
            const link = await this.favoritesRepository.create(createFavoriteDto);
            await this.favoritesRepository.save(link);
        }
        catch (e) {
            return {
                message: 'Error'
            }
        }
    }

    async deleteFavorite(user_id: number, deleteFavoriteDto: DeleteFavoriteDto){
        try {
            deleteFavoriteDto.user_id = user_id
            await this.favoritesRepository.remove(deleteFavoriteDto)
            return {
                message: 'Success'
            }
        }
        catch (e) {
            return {
                message: 'Error'
            }
        }
    }
}
