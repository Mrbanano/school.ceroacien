import { Schema, model, models } from "mongoose";

const schema = new Schema({
  Name: {
    type: String,
  },
  Logo: {
    type: String,
  },
});

export default models.User || model("User", schema);
