const Autor = require('../database/models/autoresModel')
const Editorial = require('../database/models/editorialModel')
const Escribe = require('../database/models/escribeModel')
const Libro = require('../database/models/libroModel')

const { Op } = require("sequelize");

const createEscribe = async (newEscribe) =>{
    const oneEscribe = await Escribe.create(newEscribe)
    return oneEscribe
}

const getAllEscribe = async () =>{
    const allEscribe = await Escribe.findAll({
        include:[
            {
                model: Libro,
                attributes:['nombre_lib'],
                include:[
                    {
                        model: Editorial,
                        attributes:['nombre_edi']
                    }
                ]
            },
            {
                model: Autor,
                attributes:['nombre_aut']
            }
        ],
        attributes:['cuantia'],
        where:{
            cuantia:{
                [Op.gt]: 120000
            }
        }
    })

    return allEscribe
}

module.exports = {
    createEscribe,
    getAllEscribe
}