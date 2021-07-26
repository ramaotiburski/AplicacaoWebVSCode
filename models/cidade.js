var sequelize = require("sequelize")
var banco = require("../configs/banco-config")

var cidade = banco.define("cidade",{
    idcidade: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    nome_cidade: {
        type: sequelize.STRING(50),
        allowNull: false,
    }
},{
    freezeTableName: true,
    timestamps: false
})

cidade.sync()

module.exports = cidade
