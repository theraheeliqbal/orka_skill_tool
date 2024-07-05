import { NextResponse } from "next/server";
import { connectToDataBase } from "@/lib/db";

// export const dynamic = "force-dynamic";
export async function GET() {
  try {
    const db = await connectToDataBase();

    const COLLECTION_NAME = "questions";
    const questions = await db?.collection(COLLECTION_NAME).find({}).toArray();

    if (!questions || questions.length < 1) {
      return NextResponse.json(
        {
          success: false,
          message: "Questions not added yet",
        },
        { status: 204 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: questions[0].questions,
      },
      { status: 200 }
    );
  } catch (error: any | unknown) {
    console.log("Error", error.message);

    return NextResponse.json(
      {
        success: true,
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}
