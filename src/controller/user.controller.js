const { userService } = require('../services');

const createUser = async (req, res) => {
    const { email, password, displayName, image } = req.body;
    const { type, data } = await userService.createUser(email, password, displayName, image);
    return res.status(type).json(data);
};

const getAll = async (_req, res) => {
    try {
        const getUser = await userService.getAll();
        return res.status(200).json(getUser);
    } catch (error) {
        res.status(500).json({ message: 'Internal Error' });
    }
};

module.exports = { createUser, getAll };