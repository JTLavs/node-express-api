const express = require('express');
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'myawsdb.cpemae4exgq9.eu-west-1.rds.amazonaws.com',
  user : 'jameslavery',
  password:'awsdatabase123',
  database:'cities'
});

var app = express();

app.get('/', function(req,res){
  connection.connect(function(err){
    if(err)
      res.send(err);
    else
      res.send('Connection successful!');
  });
})
app.listen(8081);
