const { Router } = require('express');
const { userController } = require('../controller');
const validateUser = require('../middlewares/validateUser');
const validateToken = require('../middlewares/validateToken');

const userRouter = Router();

userRouter.post('/', validateUser, userController.createUser);
userRouter.get('/', validateToken, userController.getAll);
userRouter.get('/:id', validateToken, userController.getById);

module.exports = userRouter;