//MODELO DE USUARIOS
// Instancia de  mongoose and mongoose.Schema
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

// Configurar un nuevo modelo moongoose and pass it using module.exports
var userSchema = new Schema({
  name:{
    type:String,
    required:true,
    unique:true
  },
  password: String,
  admin: Boolean
},
{
  collection: 'usuarios'
})
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};
module.exports = mongoose.model('User', userSchema);
