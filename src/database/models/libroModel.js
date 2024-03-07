const sequelize = require('../db')
const { DataTypes, Model } = require('sequelize')

class Libro extends Model {}
Libro.init(
    {
        id_lib:{
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            type: DataTypes.INTEGER
        },
        nombre_lib:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                max:{
                    args:[30],
                    msg:'El nombre no puede tener más de 30 caracteres'
                }
            }
        },
        unidades_lib:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        precio_lib:{
            type: DataTypes.FLOAT,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        modelName: "libros"
    }
)

module.exports = Libro