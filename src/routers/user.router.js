const { Router } = require('express');
const { userController } = require('../controller');
const validateUser = require('../middlewares/validateUser');

const userRouter = Router();

userRouter.post('/', validateUser, userController.createUser);

module.exports = userRouter;