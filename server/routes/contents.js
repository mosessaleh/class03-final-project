var express = require('express');
var router = express.Router();

var knex  = require('../helpers/knex');

/* GET category listing. */
router.get('/', function(req, res, next) {
  knex('contents').select().then( function(data) {
    res.send(data);
  });
});
router.get('/:type', function (req, res, next) {
  const type = req.params.type;
  knex('contents').where('category',type).then(function(data){
    res.send(data);
  });
});
router.get('/:type/:id', function (req, res, next) {
  const id = req.params.id;
  knex('contents').where('id',id).then(function(data){
    res.send(data);
  });
});
router.post('/:type/:id', function(req, res, next) {
  var id = req.params.id;
  var data = req.body.like;
  if (data == 'likeIt') {
     knex('contents')
    .where('id', id)
    .update({
      voteUp: req.body.vote + 1,
      thisKeyIsSkipped: undefined
    }).then( function (result) {
      res.json({ success: true});
    })
  }
  if (data == 'unlikeIt') {
     knex('contents')
    .where('id', id)
    .update({
      voteDown: req.body.vote + 1,
      thisKeyIsSkipped: undefined
    }).then( function (result) {
      res.json({ success: true});
    })
  }
  if (req.body.isreaded == true) {
    // const readed = knex('contents').where('id',id).select('readed');
    knex('contents')
    .where('id', id)
    .update({
      readed: req.body.readed + 1,
      thisKeyIsSkipped: undefined
    }).then( function (result) {
      res.json({ success: true});
    })
  }
});
module.exports = router;
