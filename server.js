const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes');

const app = express();

app.use(express.static('public'));
app.use(routes);

app.set('view engine', 'njk');

nunjucks.configure('views',{
  autoescape: false,
  express: app,
  noCache: true
})



app.listen(5000, (req,res) => {
  console.log('server iniciado');
});