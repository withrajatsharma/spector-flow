import app from './app.js';
import dbConnect from './database/dbConnection.js';



const port = process.env.PORT || 8000;


dbConnect().then(()=>{
    app.listen(port,()=>{
        console.log(`app listening on ${port}`);
    })
}).catch(err=>{
    console.log(`error in server.js in dbConect ${err}`);
})