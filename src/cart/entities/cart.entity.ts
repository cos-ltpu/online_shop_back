import {Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";

@Entity({
    name: 'cart'
})
export class Cart {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
        unique: false
    })
    user_id: number;

    @Column({
        nullable: false,
        unique: false
    })
    article_id: number;
}