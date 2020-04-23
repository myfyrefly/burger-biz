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

router.put("api/burger/:id", function(req, res) {
    var status = "id = " + req.params.id;
  console.log(status);
    burger.update({
      status: req.body.status
    }, status, function() {
      res.redirect("/")
    });
  });
 
module.exports = router;