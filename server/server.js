var express = require('express');
const http = require('http');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var config = require('./config'); // get our config file
var jwt  = require('jsonwebtoken'); // used to create, sign, and verify tokens

var User   = require('./models/user'); // get our mongoose model
var user = require('../http/controllers/user');
var administrador = require('./routes/administrador');
var usuario = require('./routes/usuario');


var app = express();

mongoose.connect(config.database);
// view engine setup
//app.set('views', path.join(__dirname, '../src'));
//app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../src/public')));
app.use(express.static(path.join(__dirname, '../dist')));

// Add headers
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,x-access-token');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// Set our api routes
app.use('/', user);
app.use('/register', user);
app.use('/login', user);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.use(bodyParser.urlencoded({ extended: false }));
/**
 * Get port from environment and store in Express.
 // =======================
 // configuration =========
 // =======================
 */
const port = process.env.PORT || '3000';// used to create, sign, and verify tokens
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);
/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`MEAN APP running on localhost:${port}`));
