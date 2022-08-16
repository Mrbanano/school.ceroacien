import { Schema, model, models } from 'mongoose';

const schema = new Schema({
  Email: {
    type: String,
    required: true,
    unique: true
  },
  Name: {
    type: String,
    required: true
  },
  LastName: {
    type: String
  },
  Picture: {
    type: String,
    required: true
  },
  Rol: {
    type: String,
    default: 'user'
  },
  Type: {
    type: String,
    default: 'Free'
  },
  Courses: [
    {
      type: String
    }
  ],
  Bootcamps: [
    {
      type: String
    }
  ]
});

export default models.User || model('User', schema);
