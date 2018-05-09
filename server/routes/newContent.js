var express = require('express');
var router = express.Router();

var knex  = require('../helpers/knex');

/* GET category listing. */
router.post('/', function(req, res, next) {
    return knex('categories').insert({
      title: req.body.title,
      category : req.body.category,
      difficulty : req.body.difficulty,
      type : req.body.type,
      link :  req.body.link,
      description: req.body.description,
      addDate: 101010101
        })
          .then( function (result) {
           res.json({ success: true, category:  req.body.category});
     })
  });

module.exports = router;