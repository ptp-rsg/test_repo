const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

let server = express();
const port = 2000
server.use(bodyParser.json());

const users = [
  {
      usersname: 'admin',
      password : 'default',
      gee : 'qwertyuiop'
  },
  {
      usersname :'visitor',
      password : 'visitor',
      gee : 'zxcvbnm'
  }
]
const employees =[
  {
      name : 'Human',
      role : 'Admin'
  },
  {
      name : 'beastman',
      role : 'visitor'
  }
]

server.get('/login', (req,res) => {
  res.send({
    keys : [users[0].gee,users[1].gee]
  })
});

server.get('/employees', (req,res) => {
  res.send({
    data : employees
  })
});

server.post('/login', (req,res) => {
  console.log(req.body)
  if(req.body.usersname === 'admin' && req.body.password ==='default')
  res.send({
      message:'success',
      data : users[0].gee
  })
  else if(req.body.usersname === 'visitor' && req.body.password ==='visitor')
  res.send({
      message:'success',
      data : users[1].gee
  })
  else{
      res.send(
          {
              message:'failed'
          }
      )
  }
})

server.post('/employees', (req,res) => {
  console.log(req.body)
  if(req.body.usersname === 'admin' && req.body.password ==='default')
  res.send({
      message:'success',
      data : employees[0]
     
  })
  else if(req.body.usersname === 'visitor' && req.body.password ==='visitor')
  res.send({
      message:'success',
      data : employees[1]
  })
  else {
    res.send({
      message:'failed'
    })
  }
})

server.listen(port, function () {
  console.log('Server Listen at',port);
});