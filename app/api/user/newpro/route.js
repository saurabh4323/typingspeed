import Profilets from "@/model/Profilets";
import connect from "@/config/connect";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { email, wpm, accuracy } = await req.json();
  const profile = await Profilets.create({ email, wpm, accuracy });
  const savv = await profile.save();
  return NextResponse.json(savv, {
    message: "Profile created successfully",
  });
}
