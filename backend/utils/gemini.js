

import cloudinary from "cloudinary";

















import { GoogleGenerativeAI } from "@google/generative-ai";
// import fs from "fs";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// async function urlToGenerativePart(url, mimeType) {
//   const response = await axios.get(url, { responseType: "arraybuffer" });
//   const buffer = Buffer.from(response.data, "binary").toString("base64");
//   return {
//     inlineData: {
//       data: buffer,
//       mimeType
//     }
//   };
// }



// accept all types of mimetypes

async function urlToGenerativePart(url) {
  const response = await axios.get(url, { responseType: "arraybuffer" });
  const mimeType = response.headers["content-type"];
  const buffer = Buffer.from(response.data, "binary").toString("base64");
  return {
    inlineData: {
      data: buffer,
      mimeType
    }
  };
}




const geminiRes = async (req, res) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

    const {image} = req.files


    const cloudinaryRes = await cloudinary.uploader.upload(
      image.tempFilePath,{
        folder: 'darkPattern'
      }
  )

  
  if(!cloudinaryRes||cloudinaryRes.error){
    return res.json({
      success:false,
      message:"error from cloudinary",
      error:cloudinaryRes.error
    })
  }
  
  const imageUrl = cloudinaryRes.secure_url;


    
    // const {websiteName} = req.body; // Assuming imageUrl is sent in the request body
    
    const prompt = `what is in the image`;
    
    // const imageUrl = "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA5L3Jhd3BpeGVsX29mZmljZV8yOF9mZW1hbGVfbWluaW1hbF9yb2JvdF9mYWNlX29uX2RhcmtfYmFja2dyb3VuZF81ZDM3YjhlNy04MjRkLTQ0NWUtYjZjYy1hZmJkMDI3ZTE1NmYucG5n.png"

    const imageParts = await urlToGenerativePart(imageUrl);

    const result = await model.generateContent([prompt, imageParts]);
    const response = await result.response;
    const text = await response.text();
    res.status(200).json({
      success: true,
      message: text
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while generating response from gemini",
      error: error.message
    });
  }
};

export default geminiRes;




