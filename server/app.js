var express = require('express');
var path = require('path');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var contentsRouter = require('./routes/contents');
var newContent = require('./routes/newContent');
var removeContent = require('./routes/removeContent');
var newCategory = require('./routes/newCategory');
var categoriesRouter = require('./routes/categories');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/', indexRouter);

// TODO: insert a new route here :)
app.use('/contents', contentsRouter);
app.use('/categories', categoriesRouter);
app.use('/newContent', newContent);
app.use('/removeContent', removeContent);
app.use('/newCategory', newCategory);

module.exports = app;
