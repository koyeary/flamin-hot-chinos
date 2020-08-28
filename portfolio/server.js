const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const transporter = require('./utils/config')
const dotenv = require('dotenv');
dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// API routes

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.post('/send', (req, res) => {
    console.log(req.body);
    
    try {
        const mailOptions = {
            from: req.body.email,
            to: process.env.email,
            html: req.body.message
        };
    transporter.sendMail(mailOptions, function(err, info) {
        if (err) {
            res.status(500).send({
                success: false,
                message:'Something went wrong. Try again later.'
            });
        } else {
            res.send({
                success: true,
                message: "Thanks for contacting me. I'll get back to you soon."
            });
        }
    });    
    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Something went wrong. Try again later.'
        });
    }
  });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
