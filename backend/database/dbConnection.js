import mongoose from "mongoose";

const dbConnect = async () => {
    try {

        mongoose.connect(process.env.MONGODB_URI,{
            dbName:'spector'
        })

        console.log(`db connection established`);
        
    } catch (error) {
        console.log(`error occured while connecting to Mongodb: ${error.message}`);
        process.exit(1);
    }
}

export default dbConnect;