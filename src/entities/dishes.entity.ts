import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Comments } from './comments.entity';
import { Products } from './products.entity';

@Entity()
export class Dishes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'dish_name', type: 'varchar', nullable: false })
  dish_name: string;

  @Column({ name: 'preparation_desc', type: 'varchar', nullable: false })
  preparation_desc: string;
  
  @Column({ name: 'image', type: 'varchar', nullable: true })
  image: string;

  @OneToMany(() => Comments, comments => comments.dishes)
  comments: Comments[];

  @Column({ name: 'rating', type: 'int', nullable: true })
  rating: number;

  @ManyToMany(() => Products)
  @JoinTable()
  products: Products[];
}