import { connectToDB } from "@/lib/mongodb";
import Todo from "@/models/todo";
import User from "@/models/user";
import mongoose from "mongoose";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const { email } = await getToken({ req });
  const { title, description, status } = await req.json();
  const { id } = params;
  try {
    await connectToDB();
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ message: "Not a valid id" }, { status: 404 });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: "Not a valid user" },
        { status: 400 }
      );
    }
    const updatedTodo = await Todo.findByIdAndUpdate(
      { _id: id, user: user._id },
      { title, description, status },
      { new: true }
    );
    return NextResponse.json({
      success: true,
      message: "Todo updated successfully",
      data: updatedTodo,
    });
  } catch (error) {
    console.log(error);
  }
}
export async function DELETE(req, { params }) {
  const { email } = await getToken({ req });
  const { id } = params;
  try {
    await connectToDB();
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ message: "Not a valid id" }, { status: 404 });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: "Not a valid user" },
        { status: 400 }
      );
    }
    const todo = await Todo.findById({ _id: id, user: user._id });
    if (!todo) {
      return NextResponse.json(
        { message: "Not a Valid Todo" },
        { status: 404 }
      );
    }
    await todo.deleteOne();
    return NextResponse.json({
      success: true,
      message: "Todo Deleted",
    });
  } catch (error) {
    console.error("Error deleting todo:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
