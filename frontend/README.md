# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh








import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import dotenv from "dotenv"



dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);




// async function fileToGenerativePart(file) {
//   const base64EncodedDataPromise = new Promise((resolve) => {
//     const reader = new FileReader();
//     reader.onloadend = () => resolve(reader.result.split(',')[1]);
//     reader.readAsDataURL(file);
//   });
//   return {
//     inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
//   };
// }




function fileToGenerativePart(path, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(path)).toString("base64"),
      mimeType
    },
  };
}

  

const geminiRes = async (req,res) => {
    try {
      
      // const{website,image}=req.body
        
        
      
        const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

        const prompt = "What's this picture?";




        // const fileInputEl = `D:/R/web dev vs coding/spector-flow/spector-flow/backend/assets/image.png`;
        // const imageParts = await Promise.all(
        //   // [...fileInputEl.files].map(fileToGenerativePart)
        //   fileInputEl
        // );
      
        // const result = await model.generateContent([prompt, ...imageParts]);
        // const response = await result.response;
        // const text = response.text();
        // console.log(text);
      
        const imageParts = [
          fileToGenerativePart("D:/R/web dev vs coding/spector-flow/spector-flow/backend/assets/image2.png", "image/png"),
        ];
  
        // const result = await model.generateContent([prompt, image]);
        const result = await model.generateContent([prompt, ...imageParts]);
        const response = await result.response;
        const text = response.text();
        res.status(200).json({
            success: true,
            message: text
        });




    } catch (error) {
        res.status(500).json({
            success: false,
            message:" error while generating response from gemini",
            error:error.message
        });
        
    }
}


export default geminiRes