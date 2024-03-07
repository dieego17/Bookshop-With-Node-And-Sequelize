const escribeservice = require('../services/escribeService')


const createEscribe = async (req, res) =>{
    const oneEscribe = await escribeservice.createEscribe(req.body)
    res.json(oneEscribe)
}

const getAllEscribe = async (req, res) =>{
    const allEscribe = await escribeservice.getAllEscribe()
    res.json(allEscribe)
}


module.exports = {
    createEscribe,
    getAllEscribe
}