import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  classDatesController,
  testDatesController,
} from "../controllers/appointmentController.js";
import {
  classDatesnewController,
  testDatesnewController,
} from "../controllers/newappointmentController.js";

//Router Object
const router = express.Router();

//ROUTING
//CLASS DATES || POST
router.post("/course", requireSignIn, isAdmin, classDatesController);

//CLASS DATES || POST
router.post("/courseother", requireSignIn, isAdmin, classDatesnewController);

//DRIVING TEST DATES || POST
router.post("/drivingtest", requireSignIn, isAdmin, testDatesController);

//DRIVING TEST DATES || POST
router.post(
  "/drivingtestother",
  requireSignIn,
  isAdmin,
  testDatesnewController
);

export default router;
