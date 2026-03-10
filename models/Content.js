import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
  title: String,
  body: String,
});

const Content = mongoose.model("Content", contentSchema);

export default Content;
