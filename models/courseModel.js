import mongoose from "mongoose";
const cCSchema = new mongoose.Schema(
  {
    selectedUsers: {
      type: [String],
      required: false,
      unique: false,
    },
    selectedDate: {
      type: String,
      required: false,
      unique: false,
    },
    selectedTime: {
      type: String,
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

export default mongoose.model("classDates", cCSchema);
