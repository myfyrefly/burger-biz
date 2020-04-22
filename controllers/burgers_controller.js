const express = require('express')
const router = express.Router();
const burger = require('../models/burgers');

router.get('/', function (req, res) {
    burger.getAll(function(result) {
        res.render('index', { burger: result })
    }); 
});

router.post('/api/burger',  function(req, res) {
    burger.create(req.body, function(result) {
        res.json({
            id: result.insertID
        });
    });
});

router.put('/:id', function(req, res){
    let status = 'id = ' + req.params.id;
    burger.updateOne({
        status: req.body.status
    }, status, (result) =>{
        console.log('item has been updated');
        res.sendStatus(200);
    });
});
 
module.exports = router;