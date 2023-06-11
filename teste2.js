const data =  require("./fakeData");

module.exports = function(req, res){
    const newUser = {
        id: req.body.id,
        name: req.body.name,
        job: req.body.job,
        password: req.body.password,
        access: 0
    }

    if(!newUser.id || !newUser.name || !newUser.job) {
        res.status(400).json("Preencha todos os dados corretamente")
        return
    } 

    data.push(newUser)
    
    res.send(newUser);
};