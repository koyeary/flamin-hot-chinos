const nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'process.env.email',
    pass: 'process.env.password' 
  }
});

module.exports = transporter;