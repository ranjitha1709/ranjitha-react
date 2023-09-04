var express = require("express")
var router = express.Router()
router.post('/login', (req, res, next) => {
    console.log(req.body)
    res.send(req.body);
})
module.exports= router