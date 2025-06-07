// Models
const questionModel = require("../models/question.model");
const levelModel = require("../models/level.model");
// All
exports.allQuestionsService = async (id) => {
  console.log("🚀 ~ exports.allQuestionsService= ~ id:", id);
  try {
    const questions = await questionModel.find({ levelId: id });
    if (!questions) {
      return { error: new Error("Error: Questions not found.") };
    }

    // **** This is a fix for when all levels were deleted, don't touch **** //
    // Find all levels
    // const level = await levelModel.findById({ _id: id });
    // const level = await levelModel.findById({
    //   _id: "676d2b5ac1327b2c6106abed",
    // });

    // // Update levelId of questions in the database
    // await questionModel.updateMany(
    //   { _id: { $in: questions.map((q) => q._id) } },
    //   { $set: { levelId: level._id } }
    // );

    return questions;
  } catch (error) {
    return { error: new Error(error) };
  }
};

// One
exports.oneQuestionService = async (id) => {
  try {
    const question = await questionModel.findById({ _id: id });
    if (!question) {
      return { error: new Error("Error: Question not found") };
    }
    return question;
  } catch (error) {
    return { error: new Error(error) };
  }
};

// Add
exports.addQuestionService = async (details, levelId) => {
  try {
    const findQuestion = await questionModel.findOne({
      question: details.question,
    });
    if (findQuestion) {
      return { error: new Error("Error: Question already exists") };
    }

    // create question
    const question = new questionModel({ ...details, levelId: levelId });
    await question.save();
    return question;
  } catch (error) {
    return { error: new Error(error) };
  }
};

// Edit
// exports.editQuestionService = async (details, id) => {
//   try {
//     const question = await questionModel.findOne({ _id: id });
//     if (!question) {
//       return { error: new Error("Error: Question not found") };
//     }

//     question.question = details?.question || details.question;
//     question.answer_a = details?.answer_a || details.answer_a;
//     question.answer_b = details?.answer_b || details.answer_b;
//     question.answer_c = details?.answer_c || details.answer_c;
//     question.answer_d = details?.answer_d || details.answer_d;
//     question.correct_answer = details?.correct_answer || details.correct_answer;
//     await question.save();
//     return question;
//   } catch (error) {
//     return { error: new Error(error) };
//   }
// };

exports.editQuestionService = async (details, id) => {
  try {
    const question = await questionModel.findOne({ _id: id });
    if (!question) {
      return { error: new Error("Error: Question not found") };
    }

    // Update only the properties provided in the `details` object
    Object.keys(details).forEach((key) => {
      if (details[key] !== undefined) {
        question[key] = details[key];
      }
    });

    await question.save();
    return question;
  } catch (error) {
    return { error: new Error(error.message) };
  }
};

// Delete
exports.deleteQuestionService = async (id) => {
  try {
    const question = await questionModel.findByIdAndRemove({ _id: id });
    if (!question) {
      return { error: new Error("Error: Question not found") };
    }
    return question;
  } catch (error) {
    return { error: new Error(error) };
  }
};
