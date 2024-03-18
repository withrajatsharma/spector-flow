import cloudinary from "cloudinary";
import { GoogleGenerativeAI } from "@google/generative-ai";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function urlToGenerativePart(url, mimeType) {
  const response = await axios.get(url, { responseType: "arraybuffer" });
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
      image.tempFilePath
  )

    
    const prompt = `what is in the image`;

    const imageParts = await urlToGenerativePart(`url`);

    const result = await model.generateContent([prompt, imageParts]);
    const response = await result.response;
    const text = await response.text();

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while generating response from gemini",
      error: error.message
    });
  }
};

export default geminiRes;