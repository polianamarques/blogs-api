const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';

const getUser = async (email, password) => {
    const user = await User.findOne({
        where: { email, password },
    });
    return user;
};

const createUser = async (email, password, displayName, image) => {
    const verifyUser = await User.findOne({ where: { email } });
    if (verifyUser) return { type: 409, data: { message: 'User already registered' } }; 
    const user = await User.create({
        displayName, email, password, image,
    });
    const jwtConfig = {
        expiresIn: '7d',
        algorithm: 'HS256',
      };
      const token = jwt.sign({
        data: {
            userId: user.id,
        },
    }, secret, jwtConfig);

    return { type: 201, data: { token } };
};
const getAll = async () => {
    const users = await User.findAll();
    return users;
};

module.exports = {
    getUser,
    createUser,
    getAll,
};