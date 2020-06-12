const express = require("express");
const path = require('path');
const css = express.static('./lity-engine/cms/css');
const js = express.static('./lity-engine/cms/js');
const adminroute = express.Router();

adminroute.get('/lity-admin', (req, res) => {
  res.sendFile(path.join(__dirname+'/cms/index.html'));
  debugger;
});
adminroute.get('/admin-panel', (req, res) => {
  res.sendFile(path.join(__dirname+'/cms/admin-panel.html'));
  debugger;
});

module.exports.css = css;
module.exports.js = js;
module.exports.adminroute = adminroute;