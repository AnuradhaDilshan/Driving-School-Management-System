import mongoose from "mongoose";
const dTSchema = new mongoose.Schema(
  {
    selectedNic1: {
      type: String,
      required: true,
      unique: true,
    },
    selectedTMarks: {
      type: String,
      required: true,
      unique: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("drivingTests", dTSchema);
