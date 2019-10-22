var createError = require('http-errors')
var express = require('express')
var cors = require('cors')
var itemRouter = require('./routes/item-routes')
var app = express()
app.use(cors())

// app.use('/', indexRouter)

app.get('/', function(req, res) {
  res.send('Hello World!')
})
app.use('/api/items', itemRouter)

var server = app.listen(8500, function() {})
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

module.exports = app
