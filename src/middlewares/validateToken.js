const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';

const validateToken = async (req, res, next) => {
    try {
       const token = req.header('Authorization');
       if (!token) {
        return res.status(401).json({ message: 'Token not found' });
       } 
       const decoded = await jwt.verify(token, secret);
       req.userId = decoded.data.userId;
       next();
    } catch (error) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
};

// validateToken feita com auxilio do conteudo do Course da Trybe

module.exports = validateToken;