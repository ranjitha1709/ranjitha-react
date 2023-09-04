var express = require('express')
var app = express()
var bodyParser = require('body-parser');
let cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
const mongoose = require('mongoose');

app.use('/', require('./controller/loginController'))

mongoose.connect('mongodb://localhost:27017/Food', {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
});

app.listen('8080', (err, res) => {
    if (err) {
        return console.log(err);
    }
    console.log("server running on port 8080")
})