const express = require('express')
const burger = require('../models/burgers');
const router = express.Router();

router.get('/', function(req, res) {
    res.redirect('/burgerHome');
});

router.get('/burgerHome', function (req, res){
    burger.all((burgerData)=> {
        res.render('index', { burger: burgerData })
    }) 
});







module.exports = router;