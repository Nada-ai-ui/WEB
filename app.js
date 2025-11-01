console.log('welcome');

const employees=[    
    {"id":"1", "name":"Ram", "email":"ram@gmail.com", "age":23},    
    {"id":"2", "name":"Shyam", "email":"shyam23@gmail.com", "age":28},  
    {"id":"3", "name":"John", "email":"john@gmail.com", "age":33},    
    {"id":"4", "name":"Bob", "email":"bob32@gmail.com", "age":41}   
] ;
const express = require('express')
const path=require('path');
const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,"login.html"))
  })

  app.get('/profile.html', function (req, res) {
    res.sendFile(path.join(__dirname,"profile.html"))
    console.log(req.query)
    console.log(req.query.un)
  })

app.get('/employees', function (req, res) {
    res.json(employees);
  })

  app.get('/employees/:id', function (req, res) {
   let id=req.params.id;
   let emp=employees.find((val,idx,arr)=>{return val.id==id});
   if(emp) res.json(emp);
   else
   res.send("not found");
  })

app.listen(3000)



/* const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
  // res.send('Hello World!')
  res.send("<h1>Hello World!</h1>")
  //res.sendFile('./login.html',{root:__dirname})
})

app.listen(port) */



//node js
/* var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080); */



