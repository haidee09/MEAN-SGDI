var express = require('express');
const http = require('http');
//var cors = require('cors');
var path = require('path');
var logger = require('morgan');
//var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config'); // get our config file
var jwt  = require('jsonwebtoken'); // used to create, sign, and verify tokens
var routes = require('./http/controllers/routes');
//var doc = require('../http/controllers/document');
var expressJwt = require('express-jwt');
var jwt = require('jsonwebtoken');

var app = express();
mongoose.Promise = global.Promise;
mongoose.connect(config.database);

app.use(logger('dev'));
//app.use(cors());
// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, './../dist')));

// Add headers
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3500');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,x-access-token');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
// We are going to protect /api routes with JWT
//app.use('/administador', expressJwt({secret: config.secret }));
//app.use('/usuario', expressJwt({secret: config.secret}));
// Set our api routes
app.use('/', routes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './../dist/index.html'));
});
// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
/* Configuracion del puerto*/
const port = process.env.PORT || '3500';// used to create, sign, and verify tokens
app.set('port', port);
/* Creacíon del servidor http */
const server = http.createServer(app);
/* Servidor en escucha de acuerdo al puerto especificado.*/
server.listen(port, () => console.log(`MEAN APP running on localhost:${port}`));
module.exports = app;
