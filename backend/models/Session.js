import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
  type: { type: String, required: true },
  unique_id: { type: String, required: true, unique: true },
  userurl: { type: String, required: true },
});

export default mongoose.model("live_sessions", sessionSchema);
