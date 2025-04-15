import mongoose from "mongoose";
const cD2Schema = new mongoose.Schema(
  {
    selectedUsers1: {
      type: [String],
      required: false,
      unique: false,
    },
    selectedDate1: {
      type: String,
      required: false,
      unique: false,
    },
    selectedTime1: {
      type: String,
      required: false,
      unique: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("drivingDates2", cD2Schema);
