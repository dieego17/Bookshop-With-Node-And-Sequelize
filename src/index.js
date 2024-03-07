const express = require('express')
const app = express()
const bodyParse = require('body-parser')

const sequelize = require('./database/db')

require('./database/associations')

app.use(express.json())
app.use(bodyParse.urlencoded({ extended: true }))


const router = require('./routes/approutes')
app.use('/', router)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(`Se ha establecido conexión con el ${PORT} 😎😎`)

    sequelize
    .sync({ force: false})
    .then(() => console.log('Se ha establecido el la conexión con la bse de datos'))
    .catch((error) => console.log('Error '+error+" ❌❌"))
})