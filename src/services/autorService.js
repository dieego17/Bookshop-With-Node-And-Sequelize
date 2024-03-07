const Autor = require('../database/models/autoresModel')

const createAutor = async (newAutor) =>{
    try {

        const oneAutor = await Autor.create(newAutor)
        return oneAutor
        
    } catch (error) {
        return error.errors[0].message
    }
}

const getAllAutores = async () =>{
    const allAutores = await Autor.findAll()
    return allAutores
}

const getOneAutor = async (nombre) =>{
    const oneAutor = await Autor.findOne({ where: { nombre_aut: nombre }})
    return oneAutor
}



module.exports = {
    createAutor,
    getAllAutores,
    getOneAutor
}