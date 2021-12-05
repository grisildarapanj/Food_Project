import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Dishes } from './dishes.entity';

@Entity()
export class Comments {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'comment', type: 'varchar', nullable: false })
  comment: string;

  @ManyToOne(() => Dishes, dishes => dishes.comments)
  dishes: Dishes;
}