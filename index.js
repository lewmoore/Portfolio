const express = require('express')
const app = express()
var port = process.env.PORT || 3000;
app.set("view engine", "ejs");
app.set("views", "views")

app.get('/', function(req, res) {
  res.render('homepage')
})

app.listen(port);
console.log("Youre now on localhost " + port);

module.exports = app
