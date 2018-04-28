var express = require('express');
var router = express.Router();

var knex  = require('../helpers/knex');

/* GET category listing. */
router.get('/', function(req, res, next) {
  knex('category').select().then( function(data) {
    res.send(data);
  });
});

module.exports = router;
