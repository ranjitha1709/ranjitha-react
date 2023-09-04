var express = require('express')
var app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use('/',require('./controller/loginController'))

app.listen('8080', (err, res) => {
    if (err) {
        return console.log(err);
    }
    console.log("server running on port 8080")
})