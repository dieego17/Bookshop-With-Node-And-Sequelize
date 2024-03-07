const Autor = require('./models/autoresModel')
const Libro = require('./models/libroModel')
const Escribe = require('./models/escribeModel')
const Editorial = require('./models/editorialModel')


Editorial.hasMany(Libro)
Libro.belongsTo(Editorial)


Libro.belongsToMany(Autor, {through: Escribe})
Autor.belongsToMany(Libro, {through: Escribe})

Libro.hasMany(Escribe)
Escribe.belongsTo(Libro)

Autor.hasMany(Escribe)
Escribe.belongsTo(Autor)
