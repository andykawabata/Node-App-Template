require('dotenv').config()
const express = require('express')
const app = express()
const fetch = require("node-fetch");
app.set('view engine', 'ejs');
app.listen(process.env.PORT || 8080, ()=>console.log("listening..."))

let enviornmentVariable = process.env.VARNAME
let todo; 

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => todo = json)



app.get('/', function(req, res){
    res.render('home', {todo: todo})
});
app.get('/:id', function(req, res){
    res.render('home', {id: req.params.id})
});
