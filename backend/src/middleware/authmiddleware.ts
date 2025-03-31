import {Response, NextFunction, request } from "express";
import Jwt,{ JwtPayload } from "jsonwebtoken"
import { AuthenticatedRequest } from "../utils/types";
import { BadRequestError } from "../utils/CutomError";

interface DecodedToken extends JwtPayload {
  id: string;
}

export const authmiddleware=async(req:AuthenticatedRequest,res:Response,next:NextFunction)=>{
      try {
      const token= await req.cookies?.token;
        if(!token){
            res.status(401).json({message:"Unauthorized"});
            return;
        }
        const decodedvalue = Jwt.verify(token, process.env.JWT_SECRET as string)as DecodedToken;
        req.id =decodedvalue?.id;
        next();
      } catch (error) {
        const rs=new BadRequestError("Internal server error");
         res.status(rs.statusCode).json({message:rs.message});
         return;
      }
}