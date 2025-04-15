import mongoose from "mongoose";
const feedbackSchema = new mongoose.Schema(
  {
    nic: {
      type: String,
      required: true,
    },
    drivingSchoolRating: {
      type: String,
      required: false,
    },
    instructorRating: {
      type: String,
      required: false,
    },
    opinion: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("feedback", feedbackSchema);
