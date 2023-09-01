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
    const updatedTodo = await Todo.findOneAndUpdate(
      { _id: id, user: user._id },
      { title, description, status },
      { new: true }
    );
    if (updatedTodo)
      return NextResponse.json({
        success: true,
        message: "Todo updated successfully",
        data: updatedTodo,
      });
    else
      return NextResponse.json({
        success: false,
        message: "Cannot find todo",
      });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Unable to update Todo",
      },
      { status: 500 }
    );
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
    return NextResponse.json(
      { message: "Unable to delete Todo" },
      { status: 500 }
    );
  }
}
