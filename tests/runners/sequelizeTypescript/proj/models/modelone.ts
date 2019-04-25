import {Table, Column, Model, HasMany} from 'sequelize-typescript';

@Table
export default class ModelOne extends Model<ModelOne> {

  @Column
  field1: string;

  @Column
  field2: number;

}
