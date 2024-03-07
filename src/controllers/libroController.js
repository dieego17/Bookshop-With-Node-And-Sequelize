const libroservice = require('../services/libroService')

const createLibro = async (req, res) =>{
    const oneLibro = await libroservice.createLibro(req.body)
    res.json(oneLibro)
}

const getAllLibros = async (req, res) =>{
    const allLibros = await libroservice.getAllLibros()
    res.json(allLibros)
}


module.exports = {
    createLibro,
    getAllLibros
}