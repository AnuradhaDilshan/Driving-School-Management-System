import mongoose from "mongoose";
const paymentSchema = new mongoose.Schema(
  {
    nic: {
      type: String,
      required: true,
    },
    paymentStatus: {
      type: String,
      required: true,
    },
    paymentId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("payment", paymentSchema);
