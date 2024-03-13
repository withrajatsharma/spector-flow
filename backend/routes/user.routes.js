import express  from "express";
import {feedBack} from '../controllers/feedbak.controller.js'



const router = express.Router();


router.post('/feedback',feedBack);

export default router;