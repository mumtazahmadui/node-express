var express = require('express');

var app = express();

var port = 5000;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function(req,res) {
    res.send('Hello text')
});

app.get('/content', function(req,res) {
    res.send('Content Page')
});

app.listen(port, function(){
    console.log('App starting port ', port)
});