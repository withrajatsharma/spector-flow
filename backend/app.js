import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import router from "./routes/user.routes.js"
import fileUpload from 'express-fileupload';



const app = express();


dotenv.config()

app.use(cors());


app.use(cookieParser());
app.use(express.json());

app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:'/temp/',
}));

app.use("/api/user",router);

export default app