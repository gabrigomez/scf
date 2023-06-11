const data =  require("./fakeData");
const bcrypt = require('bcrypt');

module.exports =  async function(req, res) {
    const salt = await bcrypt.genSalt(12);

    const newUser = {
        id: req.body.id,
        name: req.body.name,
        job: req.body.job,
        password: await bcrypt.hash(req.body.password, salt),
        access: 0
    }

    if(!newUser.id || !newUser.name || !newUser.job) {
        res.status(400).json("Preencha todos os dados corretamente")
        return
    } 

    data.push(newUser)
    
    res.send(newUser);
};