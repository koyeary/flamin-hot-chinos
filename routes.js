module.exports = function(app){

    // Our model controllers (rather than routes)
    const application = require('./routes/application');
    const users = require('./routes/users');

    app.use('/', application);
    app.use('/users', users);

}