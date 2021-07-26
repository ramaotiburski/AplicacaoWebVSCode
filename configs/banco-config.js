var sequelize = require("sequelize")

var conexao = new sequelize("progwebtest","root","123456",{
    host: "localhost",
    dialect: "mysql"
})

conexao.authenticate().then(
    function(){
        console.log("Conectado ao banco de dados...")
    }
).catch(
    function(erro){
        console.log("Erro ao conectar com o banco. Erro: "+erro)
    }
)


module.exports = conexao