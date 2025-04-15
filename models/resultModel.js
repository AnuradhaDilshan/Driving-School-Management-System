import mongoose from "mongoose";
const wTSchema = new mongoose.Schema(
  {
    selectedNic: {
      type: String,
      required: true,
      unique: true,
    },
    selectedWMarks: {
      type: String,
      required: true,
      unique: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("writtenTests", wTSchema);
