const { Router } = require('express');
const { loginController } = require('../controller');
const validateLogin = require('../middlewares/validateLogin');

const loginRouter = Router();

loginRouter.post('/', validateLogin, loginController.createLogin);

module.exports = loginRouter;