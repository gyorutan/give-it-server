const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.signUp = async (res, body) => {
  try {
    const { name, username, studentId, password } = body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUser = await User.create({
      name,
      username,
      studentId,
      email: `${studentId}@shinshu-u.ac.jp`,
      password: hashedPassword,
    });

    return res.json({
      success: true,
      message: "가입되었습니다",
      createdUser,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: "서버 오류",
      error: error.message,
    });
  }
};

exports.checkUsername = async (res, value) => {
  const user = await User.findOne({ username: value });

  if (user) {
    return res.json({ success: false, message: "invalid-username" });
  }

  return res.json({ success: true, message: "valid-username" });
};

exports.checkStudentId = async (res, value) => {
  const user = await User.findOne({ studentId: value });

  if (user) {
    return res.json({ success: false, message: "invalid-studentId" });
  }

  return res.json({ success: true, message: "valid-studentId" });
};
