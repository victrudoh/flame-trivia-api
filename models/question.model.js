// Dependencies
const mongoose = require("mongoose");

// Stuff
const Schema = mongoose.Schema;

// Question Schema
const questionSchema = new Schema(
  {
    levelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Level",
      required: true,
    },
    topicId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Level",
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
    answer_a: {
      type: String,
      required: true,
    },
    answer_b: {
      type: String,
      required: true,
    },
    answer_c: {
      type: String,
      // required: true,
    },
    answer_d: {
      type: String,
      // required: true,
    },
    correct_answer: {
      type: String,
      required: true,
    },
    media: {
      type: String,
    },
    // chosenAnswer: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Answer",
    // },
    attempted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Question", questionSchema);
