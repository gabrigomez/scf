const JsonWebTokenError = require('jsonwebtoken');

const auth = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(" ")[1];

  if(!token) {
    return res.status(401).json("Acesso negado");
  }

  try {
    // por padrão, informações sensíveis como secret devem ser protegidos em variáveis de ambiente
    // (eu sei), mas como aqui é um teste, resolvi deixar exposto diretamente no código
    secret = "iknow,thisisnotsafe"

    JsonWebTokenError.verify(token, secret);
    next();

  } catch(error) {
    return res.status(400).json("Token Inválido");
  }
};

module.exports = auth