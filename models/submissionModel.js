import mongoose from "mongoose";
const submissionSchema = new mongoose.Schema(
  {
    nic: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    selectedOptions: {
      type: [String],
      required: true,
    },
    practice: {
      type: String,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    nicImage: {
      data: Buffer,
      contentType: String,
    },
    birthImage: {
      data: Buffer,
      contentType: String,
    },
    photoImage: {
      data: Buffer,
      contentType: String,
    },
    medicalImage: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("vehicleDetails", submissionSchema);
