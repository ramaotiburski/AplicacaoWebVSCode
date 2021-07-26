var express = require("express")
var clienteControlador = require("./../controllers/clienteControlador")

var rotas = express.Router()

//rotas da API
rotas.post("/",clienteControlador.inserir)
//rotas.get("/:id",clienteControlador.buscarUm)
rotas.get("/",clienteControlador.buscarVarios)
rotas.put("/:id",clienteControlador.atualizar)
rotas.delete("/:id",clienteControlador.remover)

//rotas das páginas
rotas.get("/cadastrar",clienteControlador.novoFormulario)   //retorna a página de cadastro
rotas.get("/ediReq/:id",clienteControlador.editarFormulario) //retorna a pagina de edição
rotas.get("/delReq/:id",clienteControlador.montarReqDelete)  //monta requisição de remoção
rotas.post("/editar/:id",clienteControlador.montarReqEdicao) //monta requisição de edição


module.exports = rotas