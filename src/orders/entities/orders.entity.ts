import {Column, CreateDateColumn, Entity, PrimaryColumn} from "typeorm";

@Entity({
    name: 'orders'
})
export class Orders {

    @PrimaryColumn({
        nullable: false,
        unique: true
    })
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
    first_name: string;

    @Column({
        nullable: false,
        unique: false
    })
    surname: string;

    @Column({
        nullable: false,
        unique: false
    })
    phone: string;

    @Column({
        nullable: false,
        unique: false
    })
    address: string;

    @Column({
        nullable: false,
        unique: false
    })
    price: number;

    @Column({
        nullable: false
    })
    count: number;

    @CreateDateColumn({
        nullable: false,
        unique: false
    })
    date: string;

    @Column({
        nullable: false,
        unique: false
    })
    status: number;
}