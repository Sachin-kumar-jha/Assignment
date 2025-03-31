import { NextFunction, Request,Response } from "express";

export const authStatus=async (req:Request, res: Response,next:NextFunction) => {
    try {
      const token = await req.cookies?.token;
      if (token) {
       res.status(200).json({ authenticated: true });
       return 

      } else {
       res.status(401).json({ authenticated: false });
       return
      }
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
      next();
    }
  }