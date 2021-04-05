import express from 'express';

import { getPosts, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';
// import auth from '../middleware/auth.js';
const router = express.Router();

router.get('/', getPosts);
router.post('/',createPost);
// router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;