import {Table, Column, Model, HasMany} from 'sequelize-typescript';

@Table
export default class ModelTwo extends Model<ModelTwo> {

  @Column
  field1: string;

  @Column
  field2: number;

}
