import express from "express";
import { requireSignIn } from "../middlewares/authMiddleware.js";
import {
  training1Controller,
  training2Controller,
  training3Controller,
  training4Controller,
} from "../controllers/trainingController.js";

//Router Object
const router = express.Router();

//ROUTING
//Training Slot 01 || POST
router.post("/trainingslot1", requireSignIn, training1Controller);

//Training Slot 02 || POST
router.post("/trainingslot2", requireSignIn, training2Controller);

//Training Slot 03 || POST
router.post("/trainingslot3", requireSignIn, training3Controller);

//Training Slot 04 || POST
router.post("/trainingslot4", requireSignIn, training4Controller);

export default router;
