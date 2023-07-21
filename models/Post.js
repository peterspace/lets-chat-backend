const mongoose = require('mongoose');

const postSchema = mongoose.Schema(
  {
    userId: {
      type: String,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    location: String,
    description: String,
    picturePath: String,
    // picturePath: [String],
    userPicturePath: String,
    likes: {
      type: Map,
      of: Boolean,
      default: {},
    },
    comments: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);

// export default Post;
module.exports = Post;
