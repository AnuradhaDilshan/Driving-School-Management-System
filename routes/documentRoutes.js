import express from "express";
import { requireSignIn } from "../middlewares/authMiddleware.js";
import { documentPhotoController } from "../controllers/documentController.js";

//Router Object
const router = express.Router();

//DOCUMENTS || GET
router.get("/document-photo/:nic", documentPhotoController);

export default router;
