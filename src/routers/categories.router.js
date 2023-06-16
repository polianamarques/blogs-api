const { Router } = require('express');
const validateToken = require('../middlewares/validateToken');
const validateName = require('../middlewares/validateName');
const { categoryController } = require('../controller');

const categoryRouter = Router();

categoryRouter.post('/', validateToken, validateName, categoryController.createCategory);
categoryRouter.get('/', validateToken, categoryController.getAll);
module.exports = categoryRouter;
