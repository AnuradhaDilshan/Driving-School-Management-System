import mongoose from "mongoose";
const train2Schema = new mongoose.Schema(
  {
    nic: {
      type: String,
      required: true,
    },
    selectedDate1: {
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

export default mongoose.model("trainingslot2", train2Schema);
