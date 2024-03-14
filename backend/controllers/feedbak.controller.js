import feedModel from '../models/feedback.js'
import cloudinary from "cloudinary";

export const feedBack = async(req,res)=>{
    try {

        const {name,email,comment} = req.body;

        const createdFeed = await feedModel.create({name,email,comment})

        res.status(201).json({
            success:true,
            message:"Feedback created successfully",
            createdFeed

        })

        
    } catch (error) {
        res.status(500).json({
            success: false,
            message:" error occurred while creating feedback",
            error:error.message
        });
        
    }
}


export const imgDelete = async(req, res)=>{
    try {

        const cloudinaryRes = await cloudinary.v2.uploader.destroy(req.body.public_id);

        res.json({
            success:true,
            message:"Image deleted successfully",
            cloudinaryRes
        })

        
    } catch (error) {
        res.status(500).json({
            success: false,
            message:" errrors occurred while deleting",
            error:error.message
        });
        
    }
}