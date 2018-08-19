var express = require('express');
var morgan = require('morgan');

var app = express();
app.use(morgan('tiny'));

app.get('/test', function(req, res){
    res.send('hello ruchi');
});

app.listen(3000, function(){
    console.log('listening on port 3000');
});