import { Schema, model, models } from 'mongoose';

const PromptSchema = new Schema({
  email: {
    type: String,
  },
  prompt: {
    type: String,
    required: [true, 'Prompt is required.'],
  },
  tag: {
    type: String,
    required: [true, 'Tag is required.'],
  },
  image:{
    type:String
  },
  name:{
    type:String,
  }
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;