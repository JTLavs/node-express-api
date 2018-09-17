const express = require('express');
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'myawsdb.cpemae4exgq9.eu-west-1.rds.amazonaws.com',
  user : 'jameslavery',
  password:'awsdatabase123',
  database:'cities'
});

var app = express();

connection.connect(function(err){
  if(err)
    console.log(err);
  else
    console.log('Connection successful!')
});

app.get('/', function(req,res){
  res.send('CONNECTED TO RDS!')
})
app.listen(8081);
