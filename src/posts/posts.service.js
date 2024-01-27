const Post = require("../models/Post");

exports.createPost = async (res, user, body) => {
  try {
    console.log(user);
    const userId = user.id;
    console.log(userId);
    const { title, content, imageUrl } = body;
    const createdPost = await Post.create({
      userId,
      title,
      content,
      imageUrl,
    });
    return res.json({
      success: true,
      message: "글을 저장하였습니다",
      createdPost,
    });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "글을 저장하지 못했습니다" });
  }
};

exports.fetchAllPosts = async (res) => {
  const posts = await Post.find({}).sort({ createdAt: -1 });
  return res.json({ posts });
};

exports.fetchMyPosts = async (res, user) => {
  const userId = user.id;
  console.log(userId);
  const posts = await Post.find({ userId }).sort({ createdAt: -1 });
  console.log(posts);
  return res.json({ posts });
};

exports.fetchPostDetail = async (res, id) => {
  const post = await Post.findById({ _id: id });
  return res.json({ post });
};

exports.uploadImages = async (res, file) => {
  return res.json({
    success: true,
    file,
  });
};
