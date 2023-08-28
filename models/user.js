import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email already exists"],
    },
    name: {
      type: String,
      required: [true, "Name is required"],
    },
  },
  { timestamps: true }
);

const User = (models && models.User) || model("User", userSchema);
export default User;
