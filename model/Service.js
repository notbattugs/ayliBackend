import mongoose from "mongoose";
import { Schema } from "mongoose";

const ServiceSchema = new mongoose.Schema(
  {
    category: {
      enum: [
        "arhangai",
        "bayan-ulgii",
        "bayanhongor",
        "bulgan",
        "govi-altai",
        "govisumber",
        "darhan-uul",
        "dornogovi",
        "dornod",
        "dundgovi",
        "zavhan",
        "orhon",
        "uvurhangai",
        "umnugovi",
        "suhbaatar",
        "selenge",
        "tuv",
        "uvs",
        "hovd",
        "huvsgul",
        "hentii",
        "ulaanbaatar",
      ],
    },
    location: {
      required: [true, "bairshlaa oruulna uu"],
      type: String,
    },
    image: {
      required: [true, "zurgaa oruulne uu"],
      type: String,
    },
    title: {
      required: [true, "title aa oruulna uu"],
      type: String,
    },
    about: {
      required: [true, "about aa oruulna uu"],
      type: String,
    },
    name: {
      type: String,
      required: [true, "neree oruulna uu"],
    },
    price: {
      required: [true, "unee bich"],
      type: String,
    },
    suggestions: {
      type: Array,
    },
    rating: {
      type: Number,
    },
    owner_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

ServiceSchema.virtual("order", {
  ref: "Order",
  localField: "_id",
  foreignField: "hotel_id",
});
ServiceSchema.virtual("extraService", {
  ref: "ExtraService",
  localField: "_id",
  foreignField: "hotel_id",
});

const Service = mongoose.model("Service", ServiceSchema);
export default Service;
