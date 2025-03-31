import { NextFunction, Request, Response } from "express";
import Jwt from "jsonwebtoken";
import { prisma } from "../../utils/prisma";
import { BadRequestError, NotFoundError } from "../../utils/CutomError";
import { User } from "../../utils/types";

export const Signin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password }: User = req.body;

    const user = await prisma.user.findUnique({
      where: {
        email: email,
        password: password,
      },
    });
    if (!user) {
     const rs= new NotFoundError("User not found!");
     res.status(rs.statusCode).json({message:rs.message});
     return;
    }

    const secret = process.env.JWT_SECRET;
    const token = Jwt.sign({ id: user?.id }, `${secret}`);
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production" ? true : false, 
      sameSite: "lax"
  });
  
    res.json({ message: "Signed in successfully!" });
    next();
  } catch (error) {
    const rs=new BadRequestError("Internal server error");
    res.status(rs.statusCode).json({message:rs.message});
    return;
  }
};
