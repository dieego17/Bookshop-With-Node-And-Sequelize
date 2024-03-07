const editorialRoutes = require('express').Router()

const editorialcontroller = require('../../controllers/editorialController')

editorialRoutes.post('/', editorialcontroller.createEditorial)
editorialRoutes.get('/', editorialcontroller.getAllEditorial)
editorialRoutes.get('/:id', editorialcontroller.getOneEditorial)

module.exports = editorialRoutes