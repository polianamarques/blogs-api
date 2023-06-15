module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define(
        'User',
        {
            id: {
                type: DataTypes.INTERGER,
                primaryKey: true,
                autoIncrement: true,
            },
            displayName: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            image: DataTypes.STRING,
        },

        {
            timestamps: false,
            underscored: true,
            tableName: 'users'
        }
    );
    return user;
};