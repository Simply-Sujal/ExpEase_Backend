// import mongoose from "mongoose";
import Experience from "../models/experience.models.js";


// api to post form data 
export const submitForm = async (req, res) => {
    try {
        const { userName, companyName, collegeName, onCampusOrOffCampus, yearOfHiring, experienceDetails, image, numberOfRounds, role, interviewMode } = req.body;

        if (!userName || !companyName || !collegeName || !onCampusOrOffCampus || !yearOfHiring || !experienceDetails || !image || !numberOfRounds || !role || !interviewMode) {
            return res.status(500).json({ success: false, message: "Field missing" });
        }

        const newExperince = new Experience({
            userName,
            companyName,
            collegeName,
            onCampusOrOffCampus,
            yearOfHiring,
            experienceDetails,
            image,
            numberOfRounds,
            role,
            interviewMode
        })

        await newExperince.save();
        return res.status(201).json({ success: true, message: "Experience submitted successfully", data: newExperince })

    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "An error occurred while submitting the form", error: error.message });
    }
}


// api to get all the experinces data 
export const getAllExperinces = async (req, res) => {
    try {
        const experinces = await Experience.find();
        return res.status(200).json({ success: true, experinces })

    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "An error occurred while submitting the form", error: error.message });
    }
}


// api to get data according to company name 
export const getExperiencesByCompany = async (req, res) => {
    const { companyName } = req.params;  // This will get the "Accenture" from the URL

    try {
        const experiences = await Experience.find({ companyName });  // Filter experiences by companyName
        if (experiences.length > 0) {
            return res.status(200).json({ success: true, experiences });
        } else {
            return res.status(404).json({ success: false, message: "No experiences found for this company" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: error.message });
    }
};
