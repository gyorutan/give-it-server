const { getMyProfile, getUserProfile } = require("../users/users.service");

exports.getMyProfile = async (req, res) => {
  const userId = req.user.id;
  return await getMyProfile(res, userId);
};

exports.getUserProfile = async (req, res) => {
  const { userId } = req.params;
  return await getUserProfile(res, userId);
};
