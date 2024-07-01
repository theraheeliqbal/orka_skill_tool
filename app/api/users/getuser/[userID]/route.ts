import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { connectToDataBase } from "@/lib/db";

// export const dynamic = "force-dynamic";
export async function GET(
  req: Request,
  { params }: { params: { userID: string } }
) {
  try {
    const userID = params.userID;

    const db = await connectToDataBase();

    const user = await db
      ?.collection("users")
      .findOne({ _id: new ObjectId(userID as string) });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "User not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: user,
      },
      { status: 201 }
    );
  } catch (error: any | unknown) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}
