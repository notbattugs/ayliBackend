import mongoose from "mongoose";
import { Schema } from "mongoose";

const OrderSchema = new mongoose.Schema({
  titleOfOrder: {
    required: [true, "title aa bichne uu"],
    type: String,
  },
  definitionOfOrder: {
    required: [true, "definition ee bichne uu"],
    type: String,
  },
  imageOfOrder: {
    required: [true, "zurgaa oruulna uu"],
    type: String,
  },
  bedOfOrder: {
    required: [true, "ornii toogoo bichne uu"],
    type: String,
  },
  roomOfOrder: {
    required: [true, "uruuni toogo bichne uu"],
    type: String,
  },
  areaOfOrder: {
    required: [true, "uruunii hemjaagee bichne uu"],
    type: String,
  },
  priceOfOrder: {
    required: [true, "unee bich"],
    type: Number,
  },
  durationOfOrder: {
    type: String,
  },
  locationOfOrder: {
    type: String,
  },
  date: {
    type: String,
  },
  nameOfOrder: {
    type: String,
  },
  hotel_id: {
    type: Schema.Types.ObjectId,
    ref: "Service",
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Order = mongoose.model("Order", OrderSchema);
export default Order;
