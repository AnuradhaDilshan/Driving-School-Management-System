import mongoose from "mongoose";
const cDSchema = new mongoose.Schema(
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
  },
  { timestamps: true }
);

export default mongoose.model("drivingDates", cDSchema);
