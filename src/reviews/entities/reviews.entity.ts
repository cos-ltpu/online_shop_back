import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Articles} from "../../articles/entities/articles.entity";

@Entity({
    name: 'reviews'
})
export class Reviews {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
        unique: false
    })
    author_id: number;

    @Column({
        nullable: false,
        unique: false
    })
    article_id: number;

    @Column({
        nullable: false,
        unique: false
    })
    grade: number;

    @Column({
        nullable: true
    })
    content: string;

    @ManyToOne(type => Articles, article => article.id)
    article: Articles;
}