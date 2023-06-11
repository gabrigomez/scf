const JsonWebTokenError = require('jsonwebtoken');

const auth = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(" ")[1];

  if(!token) {
    return res.status(401).json('Acesso negado');
  }

  try {
    secret = 'iknowthisisnotsafe'

    JsonWebTokenError.verify(token, secret);
    next();

  } catch(error) {
    return res.status(400).json('Token Inválido');
  }
};

module.exports = auth