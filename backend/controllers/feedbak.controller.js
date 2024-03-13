import feedModel from '../models/feedback.js'

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