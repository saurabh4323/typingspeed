import mongoose from "mongoose";

const profilescheama = new mongoose.Schema({
  wpm: { type: String, required: true },
  accuracy: { type: String, required: true },
  email: { type: String, required: true },
});

const Profilets =
  mongoose.models.Profilets || mongoose.model("Profilets", profilescheama);

export default Profilets;
