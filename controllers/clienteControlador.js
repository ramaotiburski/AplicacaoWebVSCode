var cliente = require("./../models/cliente")
var cidade = require("./../models/cidade")
var axios = require("axios")
const qs = require("querystring")


var clienteControlador = {}

//inserir no banco - método POST
clienteControlador.inserir = function(req,res){
    cliente.create({
        nome: req.body.nome,
        cpf: req.body.cpf,
        email: req.body.email,
        idcidade: req.body.idcidade
    }).then(
        function(dados){
            res.status(200).redirect("/")
        }
    ).catch(
        function(erro){
            res.status(500).send("Erro no registro do cliente: "+erro)
        }
    )
}

//buscar no banco - métod GET
clienteControlador.buscarUm = function(req,res){
    cliente.findOne({
        raw: true,
        where: {
            idcliente: req.params.id
        }
    }).then(
        function(dados){
            res.status(200).send(dados)
        }
    ).catch(
        function(erro){
            res.status(500).send(`Erro ao buscar pelo cliente id ${req.params.id} informado: ${erro}`)
        }
    )
}

clienteControlador.buscarVarios = function(req,res){
    cliente.findAll({
        raw: true
    }).then(
        function(dados){
            res.render("tabela",{cliente: dados})
        }
    ).catch(
        function(erro){
            res.status(500).send(`Erro ao buscar os clientes: ${erro}`)
        }
    )
}

//atualizar um registro no banco - método PUT
clienteControlador.atualizar = function(req,res){
    cliente.update({
        nome: req.body.nome,
        cpf: req.body.cpf,
        email: req.body.email,
        idcidade: req.body.idcidade
    },{
        where:{
            idcliente: req.params.id
        }
    }).then(
        function(dados){
            res.sendStatus(200)
        }
    ).catch(
        function(erro){
            res.status(500).send("Erro ao atualizar o cliente: "+erro)
        }
    )
}

//remover registro do banco - método DELETE
clienteControlador.remover = function(req, res){
    cliente.destroy({
        where:{
            idcliente: req.params.id
        }
    }).then(
        function(dados){
            res.sendStatus(200)
        }
    ).catch(
        function(erro){
            res.status(500).send("Erro ao remover o cliente: "+erro)
        }
    )
}

//-------------------------------Handlebars-----------------------------------------

clienteControlador.novoFormulario = function(req,res){
    cidade.findAll({
        raw: true
    }).then(
        function(dados){
            res.render("novoForm",{
                cidade: dados
            })
        }
    ).catch(
        function(erro){
            res.status(500).send(`Erro ao buscar cidades: ${erro}`)
        }
    )
}

clienteControlador.editarFormulario = function(req,res){
    cidade.findAll({
        raw: true
    }).then(
        function(dados){
            res.render("editarForm",{
                cidade: dados,
                idcliente: req.params.id
            })
        }
    ).catch(
        function(erro){
            res.status(500).send(`Erro ao buscar cidades: ${erro}`)
        }
    )
}

clienteControlador.montarReqEdicao = function (req, res) {
    axios.put("/" + req.params.id,
        qs.stringify({
            nome: req.body.nome,
            cpf: req.body.cpf,
            email: req.body.email,
            idcidade: req.body.idcidade
        }),
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            proxy:{
                host: "3.21.106.13",
                port: 80
            }
        }
    ).then(function () {
            res.status(200).redirect("/");
        })
        .catch(function (err) {
            res.status(500).send("Erro ao editar o cliente: " + err);
        });
};

clienteControlador.montarReqDelete = function (req, res) {
    axios.delete('/' + req.params.id,{
        proxy:{
            host: "3.21.106.13",
            port: 80
        }
    }).then(function () {
            res.status(200).redirect("/");
    })
    .catch(function (err) {
        res.status(500).send("Erro ao apagar cliente: " + err);
    });
};



module.exports = clienteControlador

