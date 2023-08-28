import { connectToDB } from "@/lib/mongodb";
import Todo from "@/models/todo";
import User from "@/models/user";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { email } = await getToken({ req });
  const { title, description, status } = await req.json();
  try {
    await connectToDB();
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: "Not a valid user" },
        { status: 400 }
      );
    }
    await Todo.create({ user, title, description, status });
    return NextResponse.json({ message: "Todo Added" }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { message: "Unable to add Todo" },
      { status: 500 }
    );
  }
}
export async function GET(req) {
  const { email } = await getToken({ req });
  const { searchParams } = new URL(req.url);
  try {
    await connectToDB();
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: "Not a valid user" },
        { status: 400 }
      );
    }
    const status = searchParams.get("status") || null;
    if (status) {
      const todos = await Todo.find({ user, status });
      return NextResponse.json({ data: todos }, { status: 200 });
    } else {
      const todos = await Todo.find({ user });
      return NextResponse.json({ data: todos }, { status: 200 });
    }
  } catch (err) {
    return NextResponse.json({ message: `${err}` }, { status: 500 });
  }
}
