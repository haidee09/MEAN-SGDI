var express = require('express');
var app = express();
var router = express.Router();
var User = require('../../server/models/user');
var jwt = require('jsonwebtoken');
var config = require('../../server/config');
var auth = require('../middleware/auth');

router.get('/check-state', auth.verifyToken, (req, res) => {

  let content = {
    success: true,
    message: 'Successfully logged in'
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
          message: 'user already exists'
        };
        res.send(content);
        return;
      }
      else {
        var newUser = new User();
        newUser.name = reqUser.name;
        newUser.password = newUser.generateHash(reqUser.password);
        newUser.save( (err) => {
            if( err )
                throw err;

            let token = jwt.sign(newUser, config.secret, {
              expiresIn : 60*60*24
            });
            let content = {
              user: newUser,
              success: true,
              message: 'You created a new user',
              token: token
            };
            res.send(content);
        })
        return;
      }
    })
  })
});

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.sendFile('index.html', {root: path.join(__dirname, '../src')});
  res.render('index.html');
});

router.post('/', (req, res) => {
  var reqUser = req.body;
  User.findOne({'name' : reqUser.name}, (err, user) => {
    if( err )
      return done(err);

    if( !user ) {
      let content = {
        success: false,
        message: 'User does not exists'
      };
      console.log("HERE I AM ")
      res.send(content);
      return;
    }

    if( !user.validPassword(reqUser.password) ){
      let content = {
        success: false,
        message: 'Incorrect password'
      };
      res.send(content);
      return;
    }

    let token = jwt.sign(user, config.secret, {
      expiresIn : 60*60*24
    });
    let content = {
      user: user,
      success: true,
      message: 'You logged in',
      token: token
    };
    console.log("YOU ARE IN")
    res.send(content);
  })

});

module.exports = router;
