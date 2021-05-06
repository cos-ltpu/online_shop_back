import {Entity, JoinColumn, ManyToOne, PrimaryColumn} from "typeorm";
import {Articles} from "../../articles/entities/articles.entity";
import {Categories} from "../../categories/entities/categories.entity";

@Entity({
    name: 'articlesInCategories'
})
export class ArticlesInCategories {

    @PrimaryColumn({
        nullable: false
    })
    category_id: number;

    @PrimaryColumn({
        nullable: false
    })
    article_id: number;

    @ManyToOne(type => Articles, article => article.categoryConnection, {primary: true})
    @JoinColumn({name : "article_id"})
    article: Articles;

    @ManyToOne(type => Categories, category => category.articleConnection, {primary: true})
    @JoinColumn({name : "category_id"})
    category: Categories;
}