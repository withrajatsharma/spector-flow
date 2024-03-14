import express  from "express";
import {feedBack, imgDelete} from '../controllers/feedbak.controller.js'
import geminiRes from "../utils/gemini.js";



const router = express.Router();


router.post('/feedback',feedBack);
router.post('/geminires',geminiRes);
router.post('/delete',imgDelete);


export default router;