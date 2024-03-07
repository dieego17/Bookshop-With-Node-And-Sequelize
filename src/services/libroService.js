const Editorial = require('../database/models/editorialModel')
const Libro = require('../database/models/libroModel')

const { Op } = require("sequelize");

const createLibro = async (newLibro) =>{
    const oneLibro = await Libro.create(newLibro)
    return oneLibro
}

const getAllLibros = async () =>{
    const allLibros = await Libro.findAll({
        include:[
            {
                model: Editorial,
                attributes:['nombre_edi']
            }
        ],
        where:{
            unidades_lib:{
                [Op.gt]: 10
            }
        }
    })

    return allLibros
}

module.exports = {
    createLibro,
    getAllLibros
}