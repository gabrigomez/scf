var data = require("./fakeData");

module.exports = function(req, res) {  
    const id = req.query.id;
    const user = data.find(req => req.id == id)

    if(!user) {
        res.status(404).json('Usuário não encontrado')
        return
    }
    
    const updateUser = {
        id: id,
        name: req.body.name,
        job: req.body.job,
    }

    data.splice(user, 1, updateUser)
    res.send('Usuário Atualizado com sucesso');
};