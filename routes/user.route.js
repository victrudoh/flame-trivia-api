// Dependencies
const { Router } = require("express");
const express = require("express");
const path = require("path");

// controller
const user = require("../controllers/user.controller");

// Stuff
const router = express.Router();

// schemas
// const { addUserSchema, editUserSchema } = require("../schemas/user.schema");

// middleware
const isAuthenticated = require("../middlewares/isAuthenticated");
const { authorize } = require("../middlewares/roleCheck");
const validate = require("../middlewares/validateSchema.middleware");

// Routes
router.get("/ping", user.getPingController);

// GET All Users
router.get("/", user.getAllUsersController);

// GET One Users
router.get("/one", user.getOneUserController);

// GET All Students
// router.get("/students", user.getAllStudentsController);

// GET One User tests
router.get("/tests", user.getOneUserTestsService);

// POST Signup
// router.post(
//   "/add",
//   authorize("admin"),
//   validate(addUserSchema),
//   user.postAddUserController
// );

// // PUT Signup
// router.put(
//   "/edit",
//   authorize("admin"),
//   validate(editUserSchema),
//   user.postEditUserController
// );

// DELETE Signup
router.delete(
  "/delete",
  // authorize("admin"),
  user.postDeleteUserController
);

// LEADERBOARD Routes

// GET Leaderboard
router.get("/leaderboard", user.getLeaderboardController);

// POST Clear Leaderboard
router.get("/leaderboard/clear", user.getClearLeaderboardController);

// GET User Position on Leaderboard
router.get("/leaderboard/position", user.getUserPositionController);

module.exports = router;
