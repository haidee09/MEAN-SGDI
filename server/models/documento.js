// Instancia de  mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Configurar un nuevo modelo moongoose and pass it using module.exports
var documentoSchema = new Schema({
  folio: String,
  tipo: String,
  categoria: String,
  fecha: String,
  hora: String
},
{
  collection: 'documentos'
});
module.exports = mongoose.model('Documento', documentoSchema);
