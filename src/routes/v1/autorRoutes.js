const autorRoutes = require('express').Router()

const autorcontroller = require('../../controllers/autorController')


autorRoutes.get('/', autorcontroller.getAllAutores)
autorRoutes.post('/', autorcontroller.createAutor)
autorRoutes.get('/:nombre', autorcontroller.getOneAutor)




module.exports = autorRoutes