import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  email: { type: String, required: true },
  full_name: { type: String, required: true },
  username: { type: String, unique: true },
  bio: { type: String, default: "Hey there! I am useing LInkUp." },
  profile_picture: { type: String, default: "" },
  cover_photo: { type: String, default: "" },
  location: { type: String, default: "" },
  followers: [{ type: String, ref: "user" }], //takes the reference of user
  following: [{ type: String, ref: "user" }],
  connections: [{ type: String, ref: "user" }],
},{timestamps: true, minimize: false}); //so this will add the recent date automatically when the data is created

const User = mongoose.model('User', userSchema);

export default User;