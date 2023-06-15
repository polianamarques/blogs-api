const { User } = require('../models');

const getUser = async (email, password) => {
    const user = await User.findOne({
        where: { email, password },
    });
    return user;
};
// const getAll = async () => {
//     const users = await User.findAll();
//     return users;
// };

module.exports = {
    getUser,
};