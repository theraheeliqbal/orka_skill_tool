import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

import { connectToDataBase } from "@/lib/db";
import { sendMail } from "@/lib/sendMail";
import { extractUserName } from "@/lib/extractUserName";

export async function POST(req: Request) {
  try {
    const db = await connectToDataBase();

    const userDetails = await req.json();
    const { email, level, surveyAnswers } = userDetails;

    console.log("details in api req", email, level);

    const userName = extractUserName(email);

    const COLLECTION_NAME = "users";

    const user = await db?.collection(COLLECTION_NAME).findOneAndUpdate(
      { email: email },
      {
        $set: {
          userName: userName,
          level: level,
          surveyAnswers: surveyAnswers,
        },
      }
    );

    if (user?._id) {
      const savedUser = await db
        ?.collection(COLLECTION_NAME)
        .findOne({ _id: new ObjectId(user?._id) });

      await sendMail(savedUser);

      return NextResponse.json(
        { success: true, message: "Email sent successfully" },
        { status: 201 }
      );
      return;
    }

    const result = await db
      ?.collection(COLLECTION_NAME)
      .insertOne({ email, userName, level, surveyAnswers });

    if (!result) {
      throw new Error("Failed to add user");
    }

    const savedUser = await db
      ?.collection(COLLECTION_NAME)
      .findOne({ _id: new ObjectId(result?.insertedId) });

    await sendMail(savedUser);

    return NextResponse.json(
      { success: true, message: "user added successfully!" },
      { status: 201 }
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
