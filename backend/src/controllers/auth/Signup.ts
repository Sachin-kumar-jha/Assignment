import { NextFunction, Request, Response } from "express";
import Jwt from "jsonwebtoken";
import { prisma } from "../../utils/prisma";
import { User } from "../../utils/types";

// Sign-up Controller
export const Signup = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password }: User = req.body;

  try {
    const existingUser = await prisma.user.findFirst({
      where: { email: email },
    });

    if (!existingUser) {
      // User doesn't exist, create new user
      const user = await prisma.user.create({
        data: {
          email: email,
          password: password,
        },
      });

      if (user) {
        const secret = process.env.JWT_SECRET;
        const token = Jwt.sign({ id: user.id }, `${secret}`);
        res.cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "none",
        });

        res.status(201).json({ message: "User created successfully" });
        return next();
      }
    } else {
      res.status(409).json({ message: "Email already in use!" });
      return next();
    }
  } catch (error) {
    console.log("Error occurred:", error);
    next(error);
  }
};
