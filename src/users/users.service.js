const User = require("../models/User");

exports.getMyProfile = async (res, userId) => {
  console.log(userId);
  const user = await User.findOne({ _id: userId });
  if (!user) {
    return res.json({ success: false, message: "유저가 없습니다" });
  }
  return res.json({ success: true, message: "유저를 찾았습니다", user });
};

exports.getUserProfile = async (res, userId) => {
  const user = await User.findOne({ _id: userId });
  if (!user) {
    return res.json({ success: false, message: "유저가 없습니다" });
  }
  return res.json({ success: true, message: "유저를 찾았습니다", user });
};
