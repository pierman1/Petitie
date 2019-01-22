const port = 4000
var express = require('express')
var i18n = require('i18n')

var app = express()

app.set('views', __dirname + '/views')

app.use(i18n.init)

app.use(function (req, res, next) {
  res.setLocale('nl')
  next()
})

app.use('/en', express.static(__dirname + '/www'));
app.use('/de', express.static(__dirname + '/www'));

i18n.configure({
  locales: ['nl', 'en'],
  cookie: 'lang',
  directory: 'locales/'
})

app.get('/', function (req, res) {
  res.setLocale('nl')
  res.render('index.ejs')
})

app.get('/nl', function (req, res) {
  res.setLocale('nl')
  res.render('index.ejs')
})

app.get('/en', function (req, res) {
  res.setLocale('en')
  res.render('index.ejs')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))