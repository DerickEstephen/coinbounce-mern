const express = require("express");
const authController = require("../controller/authController");
const router = express.Router();

// test
// router.get("/test", (req, res) => {
//   res.send("Hello World!");
// });

// user

// register
router.post("/register", authController.register);

// login
router.post("/login", authController.login);

// logout
// refresh

// blog
// CURD
// create
// read all blogs
// read blog by id
// update
// delete

// comment
// create comment
// read comments by blog id

module.exports = router;
