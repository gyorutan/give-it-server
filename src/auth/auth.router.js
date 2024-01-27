const router = require("express").Router();
const {
  logIn,
  signUp,
  logOut,
  checkUsername,
  checkStudentId,
} = require("../auth/auth.controller");

router.post("/login", logIn);
router.get("/logout", logOut);
router.post("/signup", signUp);
router.get("/username/:value", checkUsername);
router.get("/studentId/:value", checkStudentId);

module.exports = router;
