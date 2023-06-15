const jwt = require('jsonwebtoken');
const { userService } = require('../services');

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';

const createLogin = async (req, res) => {
    const { email, password } = req.body;

    const user = await userService.getUser(email, password);
    if (!user) {
      return res.status(400).json({
            message: 'Invalid fields',
          });
    }
    const jwtConfig = {
        expiresIn: '7d',
        algorithm: 'HS256',
      };
      const token = jwt.sign({
        data: {
            userId: user.id,
        },
    }, secret, jwtConfig);

    return res.status(200).json({ token });
};

module.exports = { createLogin };