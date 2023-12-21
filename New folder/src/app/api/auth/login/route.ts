import User from "@/models/User";
import DBConnect from "@/utils/DBConnect";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// import { verifyToken } from "@utils/verifyToken";

export const POST = async (request: NextRequest) => {
  const { email, password } = await request.json();
  try {
    await DBConnect();
    const user = await User.findOne({ email: email });

    if (!user) {
      throw new Error("هذا الحساب غير موجود");
    }
    const comparePass = await bcrypt.compare(password, user.password);

    if (!comparePass) {
      throw new Error("كلمة السر خاطئة");
    }
    const { password: string, ...other } = user._doc;
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SCR as string,
      { expiresIn: "1d" }
    );

    return new NextResponse(JSON.stringify({ ...other, token }), {
      status: 200,
    });
  } catch (err: any) {
    return new NextResponse(err, { status: 500 });
  }
};
