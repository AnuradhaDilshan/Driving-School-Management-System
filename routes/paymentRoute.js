import express from "express";
import { requireSignIn } from "../middlewares/authMiddleware.js";
import { paymentController } from "../controllers/paymentController.js";

//Router Object
const router = express.Router();

//ROUTING
//PAYMENT || POST
router.post("/my-payments", requireSignIn, paymentController);

export default router;
