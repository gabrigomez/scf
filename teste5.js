const data = require("./fakeData");

module.exports = function(req, res) {    
    const id = req.query.id;
    const user = data.find(req => req.id == id)

    if(!user) {
        res.status(404).json('Usuário não encontrado')
        return
    }
    res.send(`Usuário ${user.name} foi lido ${user.access} vezes.`);
};