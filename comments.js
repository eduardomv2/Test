// Create web server 
const express = require('express');
const router = express.Router();
const CommentModel = require('../models/comments');
const { validateComment } = require('../helpers/validate');
const { getComments, getComment, createComment, updateComment, deleteComment } = require('../controllers/comments');

// Get all comments
router.get('/', getComments);

// Get single comment
router.get('/:id', getComment);

// Create comment
router.post('/', validateComment, createComment);

// Update comment
router.patch('/:id', validateComment, updateComment);

// Delete comment
router.delete('/:id', deleteComment);

module.exports = router;