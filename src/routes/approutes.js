const router = require('express').Router()

const autorRoutes = require('./v1/autorRoutes')
const editorialRoutes = require('./v1/editorialRoutes')
const libroRoutes = require('./v1/libroRoutes')
const escribeRoutes = require('./v1/escribeRoutes')


router.use('/v1/libreria/autores', autorRoutes )
router.use('/v1/libreria/editoriales', editorialRoutes)
router.use('/v1/libreria/libros', libroRoutes)
router.use('/v1/libreria/escribes', escribeRoutes)

module.exports = router