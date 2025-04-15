import mongoose from "mongoose";
const train4Schema = new mongoose.Schema(
  {
    nic: {
      type: String,
      required: true,
    },
    selectedDate3: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("trainingslot4", train4Schema);
