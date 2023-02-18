const express = require("express");
const authController = require("../controllers/authController");

//const userController = require("../controllers/userController");

/**IMPLEMENTING USERS ROUTE */

const userRouter = express.Router();

userRouter.post("/signup", authController.signup);

userRouter.post("/login", authController.login);

userRouter.get("/logout", authController.logout);

// userRouter
//   .route("/")
//   .get(userController.getAllUsers)
//   .post(userController.createUser);
// userRouter
//   .route("/:id")
//   .get(userController.getUser)
//   .patch(userController.updateUser)
//   .delete(userController.deleteUser);

module.exports = userRouter;
