import express from "express";

import {signupUser, loginUser, logoutUser} from "../controllers/user-controler.js";
import {getImage, uploadImage} from "../controllers/image-controler.js";
import {createPost, deletePost, getAllPosts, getPost, updatePost} from "../controllers/post-controler.js";
import {authenticateToken, createNewToken} from "../controllers/jwt-controler.js";
import {deleteComment, getComments, newComment} from "../controllers/comment-controler.js";

import upload from '../utils/upload.js';

const router = express.Router();

router.post('/signup', signupUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);

router.post('/token', createNewToken);

router.post('/create', authenticateToken, createPost);
router.put('/update/:id', authenticateToken, updatePost);
router.delete('/delete/:id', authenticateToken, deletePost);

router.get('/posts', authenticateToken,getAllPosts);
router.get('/post/:id', authenticateToken, getPost);

router.post('/file/upload', upload.single('file'), uploadImage);
router.get('/file/:filename', getImage);

router.post('/comment/new', authenticateToken, newComment);
router.get('/comments/:id', authenticateToken, getComments);
router.delete('/comment/delete/:id', authenticateToken, deleteComment)

export default router;
