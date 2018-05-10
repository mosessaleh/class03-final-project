var express = require('express');
var router = express.Router();

var knex  = require('../helpers/knex');

/* GET category listing. */
router.get('/', function(req, res, next) {
  knex('categories').select().then( function(data) {
    res.send(data);
  });
});
router.get('/:type', function (req, res, next) {
  const type = req.params.type;
  knex('categories').where('category',type).then(function(data){
    res.send(data);
  });
});
router.get('/:type/:id', function (req, res, next) {
  const id = req.params.id;
  knex('categories').where('id',id).then(function(data){
    res.send(data);
  });
});
module.exports = router;
