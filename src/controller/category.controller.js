const { categoryService } = require('../services');

const createCategory = async (req, res) => {
    const { name } = req.body;
    const { type, data } = await categoryService.createCategory(name);
    return res.status(type).json(data);
};

const getAll = async (_req, res) => {
    try {
        const getCategory = await categoryService.getAll();
        return res.status(200).json(getCategory);
    } catch (error) {
        res.status(500).json({ message: 'Internal Error' });
    }
};
module.exports = { createCategory, getAll };