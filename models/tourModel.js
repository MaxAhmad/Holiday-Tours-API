const mongoose = require("mongoose");

//Mongoose Schema definition
const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, `A tour must have a name`],
      unique: true,
    },
    slug: String,
    ratingAverage: {
      type: Number,
      default: 4.5,
    },
    ratingQuantity: {
      type: Number,
      default: 0,
    },
    priceDiscount: {
      type: Number,
    },
    summary: {
      type: String,
      trim: true,
      required: [true, `A tour must have a description`],
    },
    description: {
      type: String,
      trim: true,
    },
    imageCover: {
      type: String,
      trim: true,
      required: [true, `A tour must have a cover image`],
    },
    price: {
      type: Number,
      required: [true, `A tour must have a price`],
    },
    duration: {
      type: Number,
      required: [true, `A tour must have a duration`],
    },
    maxGroupSize: {
      type: Number,
      required: [true, `A tour must have a group size`],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
    difficulty: {
      type: String,
      required: [true, `Atour must have a difficulty`],
    },
    images: [String],
    startDates: [Date],
    secretTour: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
