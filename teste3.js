var data =  require("./fakeData");

module.exports = function(req, res) {  
    const id = req.query.id;    
    const index = data.find(req => req.id == id)
    
    if(!index) {
        res.status(404).json('Usuário não encontrado')
        return
    }
    
    data.splice(index, 1)
    res.send('Usuário removido com sucesso')
};