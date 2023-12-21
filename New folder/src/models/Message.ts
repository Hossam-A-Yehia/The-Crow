import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    message: {
      type: String,
    },
    userId: String,
  },
  { timestamps: true }
);

export default mongoose.models.Messages ||
  mongoose.model("Messages", messageSchema);
