const { Router } = require('express');
const { userController } = require('../controller');
const validateUser = require('../middlewares/validateUser');

const userRouter = Router();

userRouter.post('/', validateUser, userController.createUser);
userRouter.get('/', userController.getAll);

module.exports = userRouter;