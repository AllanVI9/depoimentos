var mongoose = require('mongoose')

var conexao = ()=>{
    var caminho =  mongoose.connect('mongodb+srv://mongodbuser:735024ph@fiap.z1kor.mongodb.net/mongoatlas?retryWrites=true&w=majority')
}

var schema = mongoose.Schema

var depoimentos = new schema({
    mensagem:String,
    nome:String,
    cargo:String
})

var documentos = mongoose.model('depoimentos',depoimentos)

module.exports = {conexao, documentos}