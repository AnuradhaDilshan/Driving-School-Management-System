import mongoose from "mongoose";
const DocumentSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
  },
  { timestamps: true }
);

export default mongoose.model("documents", DocumentSchema);
