import {Column, Entity, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { Photos } from '../../photos/entities/photos.entity';
import {Reviews} from "../../reviews/entities/reviews.entity";
import {ArticlesInCategories} from "../../articles-in-categories/entities/articles-in-categories.entity";

@Entity({
    name: 'articles'
})
export class Articles {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
    })
    name: string;

    @Column({
        nullable: true,
    })
    description: string;

    @Column({
        nullable: false
    })
    price: number;

    @Column({
        nullable: false
    })
    count: number;

    @OneToMany(type => Photos, photo => photo.article_id)
    photos: Photos[];

    @OneToMany(type => ArticlesInCategories, AC => AC.article_id)
    categoryConnection: ArticlesInCategories[];

    @OneToMany(type => Reviews, review => review.article_id)
    preview: Reviews[];

}