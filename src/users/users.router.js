const router = require("express").Router();
const { authGuard } = require("../middlewares/auth");
const { getMyProfile, getUserProfile } = require("../users/users.controller");

router.get("/profile", authGuard, getMyProfile);
router.get("/:userId", getUserProfile);

module.exports = router;
