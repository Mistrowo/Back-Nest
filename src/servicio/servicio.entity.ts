import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ServicioTabla {

  @PrimaryGeneratedColumn()
  id: number;


  @Column('varchar', { length: 50 })
  name: string;

  
  @Column('varchar', { length: 50 })
  description: string;

  @Column('int')
  stock: number;
}