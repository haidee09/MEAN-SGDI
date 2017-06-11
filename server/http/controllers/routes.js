var express = require('express');
var app = express();
var router = express.Router();
var User = require('./../../models/user');
var Documento = require('./../../models/documento');
var jwt = require('jsonwebtoken');
var config = require('./../../config');
var auth = require('./../middleware/auth');

router.get('/check-state', auth.verifyToken, (req, res) => {
  let content = {
    success: true,
    message: 'Vefiricación de token exitosa'
  }
  res.send(content);
});

router.post('/register', (req, res) => {
  var reqUser = req.body;
  process.nextTick( () => {
    User.findOne({ 'name': reqUser.name }, (err, user) => {
      if(err)
        return done(err);
      if(user){
        let content = {
          success: false,
          message: 'El usuario ya existe'
        };
        res.send(content);
        return;
      }
      else {
        var newUser = new User();
        newUser.name = reqUser.name;
        newUser.password = newUser.generateHash(reqUser.password);
        newUser.admin = false;
        newUser.save( (err) => {
          if( err )
            throw err;
          let token = jwt.sign(newUser, config.secret, {
            expiresIn : 60*60*24
          });
          let content = {
            user: newUser,
            success: true,
            message: 'Nuevo usuario creado',
            token: token
          };
          res.send(content);
        })
        return;
      }
    })
  })
});
router.post('/login', (req, res) => {
  var reqUser = req.body;
  User.findOne({'name' : reqUser.name}, (err, user) => {
    if( err )
      return done(err);
    if( !user ){
      let content = {
        success: false,
        message: 'Nombre de usuario inexistente'
    };
      console.log("HERE I AM ")
      res.send(content);
      return;
    }
    if( !user.validPassword(reqUser.password) ){
      let content = {
        success: false,
        message: 'Contraseña incorrecta'
      };
      res.send(content);
      return;
    }

    let token = jwt.sign(user, config.secret, {
      expiresIn : 60*60*24
    });

    let content = {
      user: user,
      admin: user.admin,
      success: true,
      message: 'Has iniciado sesión',
      token: token
    };
    console.log("Estas dentro")
    res.send(content);
  })
});

router.post('/savedoc', (req, res) => {
  var reqDoc = req.body;
  var newDoc = new Documento();
  newDoc.folio = reqDoc.folio;
  newDoc.tipo =  reqDoc.tipo;
  newDoc.categoria = reqDoc.categoria;
  newDoc.fecha = reqDoc.fecha;
  newDoc.hora = reqDoc.hora;
  newDoc.save( (err) => {
    if( err )
      throw err;
    let content = {
      doc: newDoc,
      success: true,
      message: 'Nuevo documento creado'
    };
    res.send(content);
  });
  return;
});

//Obtener todos los documentos
router.get('/obtenerdocs', function (req, res, next) {
  Documento.find(function(err,documents){
    if(err){
      res.send(err);
    }
    res.json(documents);
  });
});

module.exports = router;
