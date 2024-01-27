const {
  createPost,
  fetchAllPosts,
  fetchMyPosts,
  fetchPostDetail,
  uploadImages,
} = require("./posts.service");

exports.createPost = async (req, res) => {
  const user = await req.user;
  const body = await req.body;
  return await createPost(res, user, body);
};

exports.fetchAllPosts = async (req, res) => {
  return await fetchAllPosts(res);
};

exports.fetchMyPosts = async (req, res) => {
  const user = await req.user;
  return await fetchMyPosts(res, user);
};

exports.fetchPostDetail = async (req, res) => {
  const { id } = req.params;
  return await fetchPostDetail(res, id);
};

exports.uploadImages = async (req, res) => {
  const file = await req.file;
  return await uploadImages(res, file);
};

exports.remove = () => {};
exports.fetch = () => {};
exports.update = () => {};
