import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    ApplicationType: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    nic: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    Gender: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    Category: {
      type: String,
      required: true,
    },
    Practice: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("users", userSchema);
