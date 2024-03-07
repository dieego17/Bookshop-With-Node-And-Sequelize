const Editorial = require('../database/models/editorialModel')

const createEditorial = async (newEditorial) =>{
    try {
        const oneEditorial = await Editorial.create(newEditorial)
        return oneEditorial
    } catch (error) {
        return error.errors[0].message
    }
}

const getAllEditorial = async () =>{
    const allEditorial = await Editorial.findAll({
        attributes:['nombre_edi', 'direccion_edi']
    })

    return allEditorial
}

const getOneEditorial = async (id) =>{
    const oneEditorial = await Editorial.findByPk(id)
    return oneEditorial
}

module.exports= {
    createEditorial,
    getAllEditorial,
    getOneEditorial
}