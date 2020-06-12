const express = require("express");
const path = require('path');
const css = express.static('./lity-engine/cms/css');
const js = express.static('./lity-engine/cms/js');
const adminroute = express.Router();

adminroute.get('/lity-admin', (req, res) => {
  res.sendFile(path.join(__dirname+'/cms/index.html'));
  debugger;
});
adminroute.get('/page-builder', (req, res) => {
  res.sendFile(path.join(__dirname+'/cms/page-builder.html'));
  debugger;
});
adminroute.get('/pages', (req, res) => {
  res.sendFile(path.join(__dirname+'/cms/pages.html'));
  debugger;
});
adminroute.get('/posts', (req, res) => {
  res.sendFile(path.join(__dirname+'/cms/posts.html'));
  debugger;
});
adminroute.get('/users', (req, res) => {
  res.sendFile(path.join(__dirname+'/cms/users.html'));
  debugger;
});
module.exports.css = css;
module.exports.js = js;
module.exports.adminroute = adminroute;