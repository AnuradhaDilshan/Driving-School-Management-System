import mongoose from "mongoose";
const train3Schema = new mongoose.Schema(
  {
    nic: {
      type: String,
      required: true,
    },
    selectedDate2: {
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

export default mongoose.model("trainingslot3", train3Schema);
