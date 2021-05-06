import { Entity, PrimaryColumn} from "typeorm";

@Entity({
    name: 'favorites'
})
export class Favorites {

    @PrimaryColumn({
        nullable: false,
        unique: false
    })
    user_id: number;

    @PrimaryColumn({
        nullable: false,
        unique: false
    })
    article_id: number;

}