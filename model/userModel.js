import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 6
  }
});

const User = models.User || model('User', userSchema);

export default User;
