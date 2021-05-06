import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Articles} from "../../articles/entities/articles.entity";

@Entity({
    name: 'photos'
})
export class Photos {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
        unique: false
    })
    article_id: number;

    @Column({
        nullable: false,
        unique: false
    })
    photo: string;

    @ManyToOne(type => Articles, article => article.id)
    article: Articles;
}