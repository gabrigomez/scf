var data = require("./fakeData");

const getUser = (req, res) => {    
    const id = req.query.id;    
    const response = data.find(req => req.id == id)
    
    if(!response) {
        res.status(404).json("Usuário não encontrado")
        return
    }
    
    response.access += 1
    res.send(response)
};

const getUsers = (req, res) => {    
    res.send(data);    
};

module.exports = {
    getUser,
    getUsers
};