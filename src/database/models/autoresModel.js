const sequelize = require('../db')
const { Model, DataTypes } = require('sequelize')

class Autor extends Model {}
Autor.init(
    {
        id_aut:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        nombre_aut:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        direccion_aut:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        fechanac_aut:{
            type: DataTypes.DATE,
            allowNull: false,
        },
        telefono_aut:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        modelName: "autores"
    }
)

module.exports = Autor