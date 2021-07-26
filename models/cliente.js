var sequelize = require("sequelize")
var banco = require("../configs/banco-config")
var cidade = require("./cidade")

var cliente = banco.define("cliente",{
    idcliente: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: sequelize.STRING(50),
        allowNull: false,
    },
    cpf: {
        type: sequelize.STRING(15),
        allowNull: false,
    },
    email: {
        type: sequelize.STRING(50),
        allowNull: false,
    }
},{
    freezeTableName: true,
    timestamps: false
})

cidade.hasOne(cliente,{
    foreignKey: "idcidade"
})
cliente.belongsTo(cidade,{
    foreignKey: "idcidade"
})

cliente.sync()

module.exports = cliente


