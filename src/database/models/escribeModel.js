const sequelize = require('../db')
const { DataTypes, Model } = require('sequelize')


class Escribe extends Model {}
Escribe.init(
    {
        cuantia:{
            allowNull: false,
            type: DataTypes.FLOAT,
        }
    },
    {
        sequelize,
        timestamps: false,
        modelName: "escribe",
        freezeTableName: true
    }
)

module.exports = Escribe