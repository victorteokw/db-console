import { prop, Typegoose, ModelType, InstanceType } from 'typegoose';

class ModelThree extends Typegoose {
  @prop()
  field1?: string;

  @prop()
  field2?: number;
}

export default new ModelThree().getModelForClass(ModelThree);
