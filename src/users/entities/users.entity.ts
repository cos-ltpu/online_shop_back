import {Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Orders} from "../../orders/entities/orders.entity";
import {Favorites} from "../../favorites/entities/favorites.entity";

@Entity({
    name: 'users'
})
export class Users {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    name: string;

    @Column({
        nullable: false,
        unique: true
    })
    email: string;

    @Column({
        nullable: false
    })
    password: string;

    @OneToMany(type => Orders, order => order.user_id)
    orders: Orders[];

    @ManyToMany(type => Favorites, favorite => favorite.user_id)
    favorite: Favorites[];

}