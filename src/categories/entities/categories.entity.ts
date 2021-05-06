import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {ArticlesInCategories} from "../../articles-in-categories/entities/articles-in-categories.entity";

@Entity({
    name: 'categories'
})
export class Categories {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    name: string;

    @OneToMany(type => ArticlesInCategories, AC => AC.category_id, {
        nullable: true
    })
    articleConnection: ArticlesInCategories[];
}