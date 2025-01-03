// Dependencies
const { Router } = require("express");
const express = require("express");
const path = require("path");

// controller
const test = require("../controllers/test.controller");

// Stuff
const router = express.Router();

// schemas
// const { addTestSchema, editTestSchema } = require("../schemas/test.schema");

// middleware
const isAuthenticated = require("../middlewares/isAuthenticated");
const { authorize } = require("../middlewares/roleCheck");
const validate = require("../middlewares/validateSchema.middleware");

// Routes
router.get(
  "/ping",
  // isAuthenticated,
  // authorize("admin"),
  test.getPingController
);

// GET All Tests
router.get(
  "/",
  // authorize("admin"),
  test.getAllTestsController
);

// GET All Tests
router.get(
  "/one",
  // authorize("admin"),
  test.getOneTestController
);

// POST Signup
router.get(
  "/add",
  // authorize("user"),
  // authorize("admin", "user"),
  //   validate(addTestSchema),
  test.postAddTestController
);

// PUT Signup
router.post(
  "/answer",
  // authorize("user"),
  //   validate(editTestSchema),
  test.postAnswerTestController
);

// PUT Signup
router.get(
  "/end",
  // authorize("admin", "user"),
  //   validate(editTestSchema),
  test.postEndTestController
);

// DELETE Signup
router.delete(
  "/delete",
  // authorize("admin"),
  // authorize("admin", "user"),
  test.postDeleteTestController
);

// GET All Tests by course
router.get(
  "/by-course",
  // authorize("admin"),
  test.getAllTestsByLevelController
);

// **** Challenge mode **** //
// get start challenge
router.get(
  "/challenge/add",
  // authorize("user"),
  // authorize("admin", "user"),
  //   validate(addTestSchema),
  test.gettAddChallengeController
);

router.get(
  "/challenge/one",
  // authorize("admin"),
  test.getChallengeByIdController
);

// get end challenge
router.post(
  "/challenge/end",
  // authorize("admin", "user"),
  //   validate(editTestSchema),
  test.postEndChallengeController
);

module.exports = router;
