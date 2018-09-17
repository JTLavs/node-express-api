const express = require('express')

var app = express();

app.get('/', function(req,res){
  res.send('Hello AWS EB!');
})

app.listen(8081);
