const express = require('express')
const app = express()
app.set("view engine", "ejs");
app.set("views", "views")

app.get('/', function(req, res) {
  res.render('homepage')
})

module.exports = app
