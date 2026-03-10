import mongoose from "mongoose";

const titleSchema = new mongoose.Schema({
  name: String,
  description: String,
});

const Title = mongoose.model("Title", titleSchema);

export default Title;
