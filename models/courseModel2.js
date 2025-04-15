import mongoose from "mongoose";
const cC2Schema = new mongoose.Schema(
  {
    selectedUsers1: {
      type: [String],
      required: false,
      unique: false,
    },
    selectedDate2: {
      type: String,
      required: false,
      unique: false,
    },
    selectedTime2: {
      type: String,
      required: false,
      unique: false,
    },
    selectedDate3: {
      type: String,
      required: false,
      unique: false,
    },
    selectedTime3: {
      type: String,
      required: false,
      unique: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("classDates2", cC2Schema);
