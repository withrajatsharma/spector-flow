import app from './app.js';
import dbConnect from './database/dbConnection.js';
import cloudinary from 'cloudinary';


cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLIENT_NAME,
    api_key:process.env.CLOUDINARY_CLIENT_API,
    api_secret:process.env.CLOUDINARY_CLIENT_SECRET
})



const port = process.env.PORT || 8000;


dbConnect().then(()=>{
    app.listen(port,()=>{
        console.log(`app listening on ${port}`);
    })
}).catch(err=>{
    console.log(`error in server.js in dbConect ${err}`);
})