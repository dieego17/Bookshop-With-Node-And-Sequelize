const libroRoutes = require('express').Router()

const librocontroller = require('../../controllers/libroController')

libroRoutes.post('/', librocontroller.createLibro)
libroRoutes.get('/', librocontroller.getAllLibros)

module.exports = libroRoutes