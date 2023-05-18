import mongoose from "mongoose";
import { Schema } from "mongoose";

const ExtraServiceSchema = new mongoose.Schema({
  titleOfExtra: {
    required: [true, "title bichne uu"],
    type: String,
  },
  imageOfExtra: {
    required: [true, "zurgaa oruulna uu"],
    type: String,
  },
  definitionOfExtra: {
    required: [true, "definition bichne uu"],
    type: String,
  },
  priceOfExtra: {
    required: [true, "unee bich"],
    type: Number,
  },
  hotel_id: {
    type: Schema.Types.ObjectId,
    ref: "Service",
  },
});

const ExtraService = mongoose.model("ExtraService", ExtraServiceSchema);
export default ExtraService;
