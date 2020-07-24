// Requiring necessary npm packages
const express = require("express");
const session = require("express-session");
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');

// Requiring passport as we've configured it
const passport = require("./passport/setup");
const auth = require('./routes/auth');

// Setting up port and requiring models for syncing
const app = express();
const PORT = process.env.PORT || 8080;
const MONGO_URI = 'mongodb://127.0.0.1:27017/portfolio_login';

mongoose
    .connect(MONGO_URI, { userNewUrlParser: true })
    .then(console.log(`MongoDB connection ${MONGO_URI}`))
    .catch(err => console.log(err));

// Bodyparser middleware, extended false prohibits nested payloads
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", 
    resave: false, 
    saveUninitialized: true, 
    store: new MongoStore({ mongooseConnection: mongoose.connection}) })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
app.use('api/auth', auth);
app.get('/', (req, res) => res.send('Hey good lookin'));

app.listen(PORT, () => console.log(`Backend listening on port ${PORT}!`));
