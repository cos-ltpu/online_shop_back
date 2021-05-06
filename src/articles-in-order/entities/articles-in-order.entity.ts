import {Column, Entity, PrimaryColumn, ManyToOne} from "typeorm";
import {Orders} from "../../orders/entities/orders.entity";

@Entity({
    name: 'articlesInOrders'
})
export class ArticlesInOrders {

    @PrimaryColumn({
        nullable: false,
        unique: false
    })
    order_id: number;

    @Column({
        nullable: false,
        unique: false
    })
    article_id: number;

    @Column({
        nullable: false,
        unique: false
    })
    count: number;

    @ManyToOne(type => Orders, order => order.id)
    order: Orders;
}