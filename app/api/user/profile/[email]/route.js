import connect from "@/config/connect";
import Profilets from "@/model/Profilets";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  await connect();

  try {
    const { email } = params;
    const findd = await Profilets.find({ email });
    if (!findd) {
      return NextResponse.json({
        status: 400,
        message: "Profile not found",
      });
    }

    return NextResponse.json(findd, { message: "Profile fetched" });
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      status: 500,
      message: "An error occurred while fetching the profile",
    });
  }
}
