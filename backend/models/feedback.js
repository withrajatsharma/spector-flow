import mongoose, { mongo } from 'mongoose';

const feedBackSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    comment:{
        type:String,
        required:true,
    }

})

export default mongoose.model("feed",feedBackSchema)