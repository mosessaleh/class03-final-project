var express = require('express');
var router = express.Router();

var knex  = require('../helpers/knex');

/* GET category listing. */
router.post('/:id', function(req, res, next) {
    const id = req.params.id;
    return knex('contents').where('id',id).del()
          .then( function (result) {
           res.json({ success: true});
     })
  });

module.exports = router;