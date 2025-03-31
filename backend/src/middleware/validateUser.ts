import { Request, Response, NextFunction } from "express";
import { z } from "zod";

// Define schema for validation

const userSchema = z.object({
  email: z.string().email({ message: "Invalid email format" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

// Middleware for validation

export const validateUserFormate = (req: Request, res: Response, next: NextFunction): void => {
  const result = userSchema.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({  
      message: result.error.issues[0].message 
    });
    return;
  }

  next();  
};
