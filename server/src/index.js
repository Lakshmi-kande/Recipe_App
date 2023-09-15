import express from "express";
import cors from "cors";
import connectDb from "../database/connectDB.cjs";
import dotenv from 'dotenv';

import {userRouter} from "./routes/usersRoute.js"

dotenv.config();
connectDb(); 

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);


app.listen(process.env.PORT, () => console.log(`Server is working on ${process.env.PORT}`));