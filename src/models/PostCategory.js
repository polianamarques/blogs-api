module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define(
        'PostCategory',
        {
            postId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                foreignKey: true,
            },
            categoryId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                foreignKey: true,
            },
        },

        {
            timestamps: false,
            underscored: true,
            tableName: 'posts_categories'
        }
    );
    PostCategory.associate = ({ Category, BlogPost }) => {
        Category.belongsToMany(BlogPost,
            {
                as: 'posts',
                through: PostCategory,
                foreignKey: 'categoryId',
                otherKey: 'postId',
            })
            BlogPost.belongsToMany(Category,
                {
                    as: 'categories',
                    through: PostCategory,
                    foreignKey: 'postId',
                    otherKey: 'categoryId'
                })
    }

    return PostCategory;
};