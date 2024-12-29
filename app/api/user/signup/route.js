import mongoose from "mongoose";
import connect from "@/config/connect";
import UserTs from "@/model/UserTs";
import { NextResponse } from "next/server";

// try {
//   connect();
// } catch (err) {
//   console.log(err);
// }

export async function POST(req) {
  await connect();
  try {
    const { name, email, password } = await req.json();
    const emailvalid = await UserTs.findOne({ email });
    if (emailvalid) {
      return new Response("Emassil already exists", {
        status: 400,
      });
    }

    const userdata = new UserTs({ name, email, password });
    const result = await userdata.save();
    return NextResponse.json(
      result,
      { message: "user created" },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "Error creating user" },
      { status: 500 }
    );
  }
}
