import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { registerController } from "@/controllers/auth/auth.controller";

export async function POST(req) {
  try {
    const body = await req.json();


    const data = await registerController(body);

    // CREATE RESPONSE
    const response = NextResponse.json({
      success: true,
      message: "User Registered Successfully",
      user: data.user,
    });

    // SET COOKIE
    response.cookies.set("auth_token", data.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    return response;
  } catch (error) {
    console.log(error);
    // ZOD VALIDATION ERROR
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: error.issues[0].message,
        },
        {
          status: 400,
        },
      );
    }

    // NORMAL ERROR
    return NextResponse.json(
      {
        success: false,
        message: error?.message || "Something went wrong",
      },
      {
        status: 400,
      },
    );
  }
}
