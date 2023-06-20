const { Router } = require('express');
const validateToken = require('../middlewares/validateToken');
const validateInfo = require('../middlewares/validateInfo');
const { postController } = require('../controller');

const postRouter = Router();

postRouter.post('/', validateToken, validateInfo, postController.createPost);

module.exports = postRouter;