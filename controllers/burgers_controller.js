const express = require('express')
const burger = require('../models/burgers');
const router = express.Router();

router.get('/', function(req, res) {
    res.redirect('/burgerHome');
});

router.get('/burgerHome', function (req, res){
    burger.selectAll((burgerData)=> {
        res.render('index', { burger_data: burgerData })
    }) 
});

router.post('/burgerHome/create', function(req, res) {
    burger.insertOne(req.body.burger_name,(result) => {
        console.log(result);
        res.redirect('/burgerHome');
    })
});

router.put('/burgerHome/:id', function(req, res){
    burger.updateOne(req.params.id, (result) =>{
        console.log(results);
        res.sendStatus(200);
    });
});

module.exports = router;