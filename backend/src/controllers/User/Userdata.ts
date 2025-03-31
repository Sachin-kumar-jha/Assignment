import {Response, NextFunction } from "express";
import { prisma } from "../../utils/prisma";
import { AuthenticatedRequest } from "../../utils/types";
import { BadRequestError, NotFoundError } from "../../utils/CutomError";
export const Userdata=async(req:AuthenticatedRequest,res:Response,next:NextFunction)=>{
     try {
        const id = req.id;
       const userdata=await prisma.user.findUnique({
        where:{
            id:id
        }
       });
    if(userdata){
        res.status(201).json({userdata});
        next();
    }else{
        const rs=new NotFoundError("User not found!");
        res.status(rs.statusCode).json({message:rs.message});
        return;
    }
     } catch (error) {
      const rs=new BadRequestError("Internal server error");
      res.status(rs.statusCode).json({message:rs.message});
      return;
     }
}