const jwt = require("jsonwebtoken");

exports.authGuard = (req, res, next) => {
  try {
    const token = req.cookies.token;
    console.log(token);
    const user = jwt.verify(token, process.env.JWT_SECRET);
    if (!user) {
      return res.json({ success: false, message: "Unauthorized" });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.json({ success: false, message: "Unauthorized" });
  }
};
