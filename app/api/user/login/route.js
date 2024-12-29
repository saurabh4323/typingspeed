import connect from "@/config/connect";
import UserTs from "@/model/UserTs";
import { NextResponse } from "next/server";

export async function POST(req) {
  await connect();
  const { email, password } = await req.json();
  console.log(email, password);
  const user = await UserTs.findOne({ email, password });
  if (!user) {
    // console.log
    return NextResponse.json({
      message: "user dont exist",
      staus: "500",
    });
  } else {
    return NextResponse.json({
      message: "user exist",
      status: "200",
    });
  }
}
