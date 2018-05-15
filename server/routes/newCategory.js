var express = require('express');
var router = express.Router();

var knex  = require('../helpers/knex');

/* GET category listing. */
router.post('/', function(req, res, next) {
    knex('categories').count().where('name',req.body.name).then(function(result){
        console.log()
        if (result[0]['count(*)'] == 0) {
            console.log(result);
            knex('categories').insert({
            name: req.body.name,
            toRoute : req.body.toRoute
                })
                .then( function (data) {
                res.json({ success: true});
            })
        } else {
            res.json({ success: false});
        }
    });
  });

module.exports = router;