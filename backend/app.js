import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import router from "./routes/user.routes.js"


const app = express();


dotenv.config()

app.use(cors());


app.use(cookieParser());
app.use(express.json());

app.use("/api/user",router);

export default app