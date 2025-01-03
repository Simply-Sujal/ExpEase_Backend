import express from "express";
import { submitForm, getAllExperinces, getExperiencesByCompany } from "../controllers/experience.controllers.js";

const router = express.Router();

router.post("/experinceform", submitForm);
router.get("/allexperincedata", getAllExperinces);
router.get("/company/:companyName", getExperiencesByCompany);

export default router;