import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import {registerRoute} from "./routes/registerRoute"; 
import { userRoute } from "./routes/userRoute";
import cors from "cors";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin:process.env.FRONTEND_URL,  
  credentials: true
}));
app.use("/api/v1/auth",registerRoute);
app.use("/api/v1/user",userRoute);


const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server is listening on http://localhost:${PORT}`);
})
export default app;
