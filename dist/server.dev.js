"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var morgan = require('morgan');

var cors = require('cors');

var server = express();
var port = 2000;
server.use(bodyParser.json());
var users = [{
  usersname: 'admin',
  password: 'default',
  gee: 'qwertyuiop'
}, {
  usersname: 'visitor',
  password: 'visitor',
  gee: 'zxcvbnm'
}];
var employees = [{
  name: 'Human',
  role: 'Admin'
}, {
  name: 'beastman',
  role: 'visitor'
}];
server.get('/login', function (req, res) {
  res.send({
    keys: [users[0].gee, users[1].gee]
  });
});
server.get('/employees', function (req, res) {
  res.send({
    data: employees
  });
});
server.post('/login', function (req, res) {
  console.log(req.body);
  if (req.body.usersname === 'admin' && req.body.password === 'default') res.send({
    message: 'success',
    data: users[0].gee
  });else if (req.body.usersname === 'visitor' && req.body.password === 'visitor') res.send({
    message: 'success',
    data: users[1].gee
  });else {
    res.send({
      message: 'failed'
    });
  }
});
server.post('/employees', function (req, res) {
  console.log(req.body);
  if (req.body.usersname === 'admin' && req.body.password === 'default') res.send({
    message: 'success',
    data: employees[0]
  });else if (req.body.usersname === 'visitor' && req.body.password === 'visitor') res.send({
    message: 'success',
    data: employees[1]
  });else {
    res.send({
      message: 'failed'
    });
  }
});
server.listen(port, function () {
  console.log('Server Listen at', port);
});