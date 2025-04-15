import express from "express";
import { requireSignIn } from "../middlewares/authMiddleware.js";
import {
  classAttendController,
  examAttendController,
  testAttendController,
} from "../controllers/attendenceController.js";

//Router Object
const router = express.Router();

//ROUTING
//CLASS ATTENDANCE CHECKING || POST
router.post("/classAttendance", requireSignIn, classAttendController);

//EXAM ATTENDANCE CHECKING || POST
router.post("/examAttendance", requireSignIn, examAttendController);

//DRIVING TEST ATTENDANCE CHECKING || POST
router.post("/testAttendance", requireSignIn, testAttendController);

export default router;
