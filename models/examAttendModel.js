import mongoose from "mongoose";
const examSchema = new mongoose.Schema(
  {
    nic: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("examAttendence", examSchema);
