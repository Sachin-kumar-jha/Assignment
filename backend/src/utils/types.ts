import { Request } from "express";

export interface AuthenticatedRequest extends Request{
  id?:string;
}

export  interface User{
    id:string;
    email:string;
    password:string;
}