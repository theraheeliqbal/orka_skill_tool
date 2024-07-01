import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

import { connectToDataBase } from "@/lib/db";
import { sendMail } from "@/lib/sendMail";

export async function POST(req: Request) {
  try {
    const db = await connectToDataBase();

    const userDetails = await req.json();
    const { username, location, email, level } = userDetails;

    const COLLECTION_NAME = "users";

    const user = await db?.collection(COLLECTION_NAME).findOneAndUpdate(
      { email: email },
      {
        $set: {
          username: username,
          location: location,
          level: level,
        },
      }
    );

    if (user?._id) {
      const savedUser = await db
        ?.collection("users")
        .findOne({ _id: new ObjectId(user?._id) });

      await sendMail(savedUser);

      return NextResponse.json(
        { success: true, message: "user updated successfully!" },
        { status: 201 }
      );
      return;
    }

    const result = await db
      ?.collection("users")
      .insertOne({ username, location, email, level });

    if (!result) {
      throw new Error("Failed to insert user!");
    }

    const savedUser = await db
      ?.collection("users")
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
