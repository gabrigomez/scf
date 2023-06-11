const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
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

  const checkPassword = await bcrypt.compare(password, user.password)

  if(!checkPassword) {
    return res.status(422).json('Senha incorreta');
  }

  secret = 'iknow,thisisnotsafe'

  const token = jwt.sign({ id: user.id }, secret)
  
  res.status(201).json({token});

};

module.exports = login;