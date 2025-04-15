import express from "express";
import { requireSignIn } from "../middlewares/authMiddleware.js";
import { feedbackController } from "../controllers/feedbackController.js";

//Router Object
const router = express.Router();

//ROUTING
//FEEDBACK || POST
router.post("/feedbacks", requireSignIn, feedbackController);

export default router;
