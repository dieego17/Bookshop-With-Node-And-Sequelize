const autoservice = require('../services/autorService')

const createAutor = async (req, res) =>{
    const oneAutor = await autoservice.createAutor(req.body)
    res.json(oneAutor)
}

const getAllAutores = async (req, res) =>{
    const allAutores = await autoservice.getAllAutores()
    res.json(allAutores)
}

const getOneAutor = async (req, res) =>{
    const oneAutor = await autoservice.getOneAutor(req.params.nombre)
    res.json(oneAutor)
}


module.exports = {
    createAutor,
    getAllAutores,
    getOneAutor
}