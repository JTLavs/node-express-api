const express = require('express');
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: process.env.RDS_DB_HOST,
  user: process.env.RDS_USER,
  password: process.env.RDS_PASSWORD,
  port:process.env.RDS_PORT
});

var app = express();
console.log('CONNECTING....')
connection.connect(function(err){
  if(err){
    console.log(err);
  }else{
      console.log('Connection successful!')
  }

});

app.get('/', function(req,res){
  res.send('CONNECTED TO RDS!')
})
app.listen(8081);
