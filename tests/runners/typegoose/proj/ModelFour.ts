import { prop, Typegoose, ModelType, InstanceType } from 'typegoose';

class ModelFour extends Typegoose {
  @prop()
  field1?: string;

  @prop()
  field2?: number;
}

export default new ModelFour().getModelForClass(ModelFour);
