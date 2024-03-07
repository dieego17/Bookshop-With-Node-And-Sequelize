const editorialservice= require('../services/editorialService')


const createEditorial = async (req, res) =>{
    const oneEditorial = await editorialservice.createEditorial(req.body)
    res.json(oneEditorial)
}

const getAllEditorial = async (req, res) =>{
    const allEditorial = await editorialservice.getAllEditorial()
    res.json(allEditorial)
}

const getOneEditorial = async (req, res) =>{
    const oneEditorial = await editorialservice.getOneEditorial(req.params.id)
    res.json(oneEditorial)
}

module.exports = {
    createEditorial,
    getAllEditorial,
    getOneEditorial
}