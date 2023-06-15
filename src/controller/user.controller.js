const { userService } = require('../services');

const createUser = async (req, res) => {
    const { email, password, displayName, image } = req.body;
    const { type, data } = await userService.createUser(email, password, displayName, image);
    return res.status(type).json(data);
};

module.exports = { createUser };