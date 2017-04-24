import { Schema, model } from 'mongoose';

// set up a mongoose model and pass it using module.exports
export const User = model('User', new Schema({
  name: String,
  password: String,
  admin: Boolean
}));