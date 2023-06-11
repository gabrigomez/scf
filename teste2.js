const data =  require("./fakeData");

module.exports = function(req, res){
  
    const name = req.body.name;
    const job = req.body.job;
    const id = req.body.id
    
    const newUser = {
        id: id,
        name: name,
        job: job,
    }

    if(!newUser.id || !newUser.name || !newUser.job) {
        res.status(400).json("Preencha todos os dados corretamente")
    } 

    data.push(newUser)
    
    res.send(newUser);
};