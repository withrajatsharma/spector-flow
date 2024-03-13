import express  from "express";
import {feedBack} from '../controllers/feedbak.controller.js'
import geminiRes from "../utils/gemini.js";



const router = express.Router();


router.post('/feedback',feedBack);
router.get('/geminires',geminiRes);


export default router;