import express from "express";
import { requireSignIn } from "../middlewares/authMiddleware.js";
import { vehicleCategoryController } from "../controllers/submitController.js";
import formidable from "express-formidable";

//Router Object
const router = express.Router();

//ROUTING
//VEHICLE CATEGORY || POST
router.post(
  "/submitting",
  requireSignIn,
  formidable(),
  vehicleCategoryController
);

export default router;
