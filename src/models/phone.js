import mongoose from "mongoose";
const { Schema, model } = mongoose;

const PhoneSchema = new Schema({
  brand: String,
  model: String,
  //   year: {
  //     type: Number,
  //     min: 1900,
  //     max: 2022,
  //   },
  //   created_at: {
  //     type: Date,
  //     default: Date.now,
  //   },
});

export default model("Phone", PhoneSchema);
