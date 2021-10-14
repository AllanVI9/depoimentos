var mongoose = require('mongoose')

var conexao = ()=>{
    var caminho =  mongoose.connect('mongodb+srv://awesome:ivaAwesome9@fiap.9lwql.mongodb.net/mongoatlas?retryWrites=true&w=majority')
}

var schema = mongoose.Schema

var depoimentos = new schema({
    mensagem:String,
    nome:String,
    cargo:String
})

var documentos = mongoose.model('depoimentos',depoimentos)

module.exports = {conexao, documentos}