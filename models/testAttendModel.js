import mongoose from "mongoose";
const testSchema = new mongoose.Schema(
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

export default mongoose.model("testAttendence", testSchema);
