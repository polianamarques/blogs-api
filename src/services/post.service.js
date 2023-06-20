const Sequelize = require('sequelize'); 
const { Category } = require('../models');
const config = require('../config/config');
const { BlogPost, PostCategory } = require('../models');

const env = process.env.NODE_ENV;

const sequelize = new Sequelize(config[env]);

const verifyIds = async (categoryIds) => {
    const { count } = await Category.findAndCountAll(
        {
            where: { id: categoryIds },
        },
    );
    return count;
};

const createPost = async (title, content, categoryIds, userId) => {
    const trans = await sequelize.transaction(async (t) => {
    const post = await BlogPost.create({ title, content, userId }, { transaction: t });
    const postCategorys = categoryIds.map((id) => ({ postId: post.id, categoryId: id }));
    await PostCategory.bulkCreate(postCategorys, { transaction: t });
     return { type: 201, data: post };
    });
     return trans;
};

module.exports = { verifyIds, createPost };