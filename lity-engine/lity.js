const session = require('express-session');
const cookieParser = require('cookie-parser');
const express = require("express");
const path = require('path');
const css = express.static('./lity-engine/cms/css');
const js = express.static('./lity-engine/cms/js');
const adminroute = express.Router();

//cookie
adminroute.use(session({secret:'lailahaillaallah', saveUninitialized : true, resave : true}));
//use cookie parser
adminroute.use(cookieParser());

adminroute.get('/lity-admin', (req, res) => {
  res.sendFile(path.join(__dirname+'/cms/index.html'));
  req.session.page_view++;
  res.cookie('name', 'express');
  console.log(`admin viewed ${req.session.page_view}`);
});
adminroute.get('/page-builder', (req, res) => {
  res.sendFile(path.join(__dirname+'/cms/page-builder.html'));
});
adminroute.get('/pages', (req, res) => {
  res.sendFile(path.join(__dirname+'/cms/pages.html'));
});
adminroute.get('/posts', (req, res) => {
  res.sendFile(path.join(__dirname+'/cms/posts.html'));
});
adminroute.get('/users', (req, res) => {
  res.sendFile(path.join(__dirname+'/cms/users.html'));
});
adminroute.get('/destroysession',(req, res) => {
  req.session.destroy();
});
module.exports.css = css;
module.exports.js = js;
module.exports.adminroute = adminroute;