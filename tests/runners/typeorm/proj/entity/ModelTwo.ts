import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class ModelTwo {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  field1: string;

  @Column()
  field2: number;

}
