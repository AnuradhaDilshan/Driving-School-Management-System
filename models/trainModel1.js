import mongoose from "mongoose";
const train1Schema = new mongoose.Schema(
  {
    nic: {
      type: String,
      required: true,
    },
    selectedDate: {
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

export default mongoose.model("trainingslot1", train1Schema);
