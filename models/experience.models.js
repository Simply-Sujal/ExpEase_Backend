import mongoose from "mongoose";

const ExperienceSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
        },
        companyName: {
            type: String,
            required: true,
        },
        collegeName: {
            type: String,
            required: true,
        },
        onCampusOrOffCampus: {
            type: String,
            enum: ['On-Campus', 'Off-Campus'],
            required: true,
        },
        yearOfHiring: {
            type: Number,
            required: true,
        },
        experienceDetails: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        numberOfRounds: {
            type: Number,
            required: true,
        },
        role: {
            type: String,
            required: true,
        },
        interviewMode: {
            type: String,
            enum: ['walk-in', 'online'],
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

const Experience = mongoose.model('Experience', ExperienceSchema);

export default Experience;
