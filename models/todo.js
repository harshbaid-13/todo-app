import { Schema, model, models } from "mongoose";

const todoSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      required: [true, "Status is required"],
    },
  },
  { timestamps: true }
);

const Todo = (models && models.Todo) || model("Todo", todoSchema);
export default Todo;
