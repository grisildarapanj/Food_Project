import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'product_name', type: 'varchar', nullable: false })
  product_name: string;

  @Column({ name: 'ingridients', type: 'varchar', nullable: true })
  ingridients: string;
}