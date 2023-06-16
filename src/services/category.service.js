const { Category } = require('../models');

const createCategory = async (name) => {
    const category = await Category.create({
       name,
    });
    return { type: 201, data: category };
};

module.exports = { createCategory };