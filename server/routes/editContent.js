var express = require('express');
var router = express.Router();

var knex  = require('../helpers/knex');

/* GET category listing. */
router.post('/', function(req, res, next) {
    knex('contents').update({
        title: req.body.title,
        category: req.body.category,
        difficulty: req.body.difficulty,
        type: req.body.type,
        link: req.body.link,
        description: req.body.description,
    }).where('id',req.body.id).then(function(result){
        res.json({ success: true});
    });
  });

module.exports = router;