var sequelize = require("sequelize")

var conexao = new sequelize("progweb","root","12345678",{
    host: "database-1.cp5qv0kwic5o.us-east-2.rds.amazonaws.com",
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