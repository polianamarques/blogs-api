'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts_categories',
      {
        postId: {
          type:Sequelize.INTEGER,
          field: 'post_id',
          allowNull: false, 
          references: {
            model: 'blog_posts',
            key: 'id',
          },
          onUpdate: 'CASCADE', 
          onDelete: 'CASCADE',
        }, 
        categoryId: {
          type:Sequelize.INTEGER,
          field: 'category_id',
          allowNull: false, 
          references: {
            model: 'categories',
            key: 'id',
          },
          onUpdate: 'CASCADE', 
          onDelete: 'CASCADE',
        }, 
        
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('post_categories');
  }
};
