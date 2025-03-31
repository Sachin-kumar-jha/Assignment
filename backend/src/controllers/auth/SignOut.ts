import { NextFunction, Request, Response } from "express";
export const SignOut=async (req:Request, res:Response,next:NextFunction) => {
    res.clearCookie("token");
    res.status(200).json({ message: "Logout successful" });
    next();
}