import { Schema, model, models } from "mongoose";

const schema = new Schema({
  Clave: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
  },
  Logo: {
    type: String,
  },
});

export default models.User || model("User", schema);
