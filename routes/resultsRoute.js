import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  marksController,
  resultsController,
} from "../controllers/resultsController.js";

//Router Object
const router = express.Router();

//ROUTING
//WRITTEN TEST || POST
router.post("/results", requireSignIn, isAdmin, resultsController);

//DRIVING TEST || POST
router.post("/Testresults", requireSignIn, isAdmin, marksController);

export default router;
