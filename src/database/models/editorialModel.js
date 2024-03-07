const sequelize = require('../db')
const { DataTypes, Model } = require('sequelize')

class Editorial extends Model {}
Editorial.init(
    {
        id_edi:{
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            type: DataTypes.INTEGER
        },
        nombre_edi:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        direccion_edi:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        telefono_edi:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        modelName: "editoriales"
    }
)

module.exports = Editorial