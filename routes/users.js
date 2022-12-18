const express = require("express");
const {
  userSignup,
  userLogin,
  getUserById,
  getUsers,
  deleteUser,
  getUserCount,
} = require("../controllers/userController");
const {
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
  VerifyAdmin,
} = require("../middlewares/verifyToken");

const userRoutes = express.Router();

/* SIGNUP */
userRoutes.post("/signup", userSignup);

/* LOGIN */
userRoutes.post("/login", userLogin);

/* GET ALL USER */
userRoutes.get("/", VerifyAdmin, getUsers);

/* Get user Count*/
userRoutes.get("/count", VerifyAdmin, getUserCount);

/* GET USER */
userRoutes.get("/:id", VerifyAdmin, getUserById);

/* DELETE USER */
userRoutes.delete("/:id", VerifyAdmin, deleteUser);

module.exports = userRoutes;

// firstName
// lastName
// email
// phone
// password
