import mongoose from "mongoose";
const classSchema = new mongoose.Schema(
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

export default mongoose.model("classAttendence", classSchema);
