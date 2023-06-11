const jwt = require('jsonwebtoken');
const data = require("./fakeData");

async function login (req, res) {  
  const { name, password } = req.body;

  if(!name) {
    return res.status(422).json('O nome de usuário é obrigatório');
  };

  if(!password) {
    return res.status(422).json('A senha de usuário é obrigatória');
  };

  const user = data.find(req => req.name == name)

  if (!user) {
    return res.status(404).json('Usuário não cadastrado');
  };

  const checkPassword = password === user.password ? true : false

  if(!checkPassword) {
    return res.status(422).json('Senha incorreta');
  }

  secret = 'iknowthisisnotsafe'

  const token = jwt.sign({ id: user.id }, secret)
  res.status(201).json({token, user});

};

module.exports = login;