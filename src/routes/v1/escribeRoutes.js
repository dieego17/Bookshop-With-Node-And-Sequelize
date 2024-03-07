const escribeRoutes = require('express').Router()

const escribecontroller = require('../../controllers/escribeController')

escribeRoutes.post('/', escribecontroller.createEscribe)
escribeRoutes.get('/', escribecontroller.getAllEscribe)

module.exports = escribeRoutes