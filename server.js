// Dependencies
// ============
const express        = require('express');
const path           = require('path');
const logger         = require('morgan');
const cookieParser   = require('cookie-parser'); // for working with cookies
const bodyParser     = require('body-parser');
const session        = require('express-session'); 
const passport 			 = require("./config/passport");
const config				 = require("./config/extra-config");
const mongoose 			 = require('mongoose');

// Express settings
// ================

// instantiate our app
const app            = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

//set up handlebars
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

const isAuth 				 = require("./config/middleware/isAuthenticated");
const authCheck 		 = require('./config/middleware/attachAuthenticationStatus');

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + 'public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ secret: config.sessionKey, resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(authCheck);

require('./routes')(app);

//Set up default mongoose connection
const configDB = require('./config/database');
mongoose.connect(configDB.url);

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
// no stacktraces leaked to user unless in development environment
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: (app.get('env') === 'development') ? err : {}
  })
});


// our module get's exported as app.
module.exports = app;


// Where's the listen? Open up bin/www, and read the comments.
