import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ServicioTabla {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  stock: number;
}