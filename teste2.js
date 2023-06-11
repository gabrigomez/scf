const data =  require("./fakeData");

module.exports = function(req, res){
  
    const name = req.body.name;
    const job = req.body.job;
    const id = req.body.id
    const password = req.body.password
    
    const newUser = {
        id: id,
        name: name,
        job: job,
        password: password
    }

    if(!newUser.id || !newUser.name || !newUser.job) {
        res.status(400).json("Preencha todos os dados corretamente")
        return
    } 

    data.push(newUser)
    
    res.send(newUser);
};