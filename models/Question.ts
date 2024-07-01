import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: Boolean,
    required: true,
    default: true,
  },
});

const Question = mongoose.model("Question", QuestionSchema);

export default Question;
