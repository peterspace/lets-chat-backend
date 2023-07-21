const express = require('express');
const {
  createPost,
  getFeedPosts,
  getUserPosts,
  likePost,
} = require('../controllers/posts');
const { verifyToken } = require('../middleware/auth');

const router = express.Router();

/* POST */

// router.post('/', verifyToken, createPost);
router.post('/', createPost);

/* READ */
router.get('/', verifyToken, getFeedPosts);
router.get('/:userId/posts', verifyToken, getUserPosts);

/* UPDATE */
router.patch('/:id/like', verifyToken, likePost);

module.exports = router;
