const express = require("express");
const app = express();
const css = require("./lity-engine/lity").css;
const js = require("./lity-engine/lity").js;
const adminroute = require("./lity-engine/lity").adminroute;

const port = 81;
const hostname = "0.0.0.0";

//confugure pug engine
app.use('/css',css);
app.use('/js',js);

//lity-cms admin
app.use(adminroute);
app.get('*', (req, res) => {
  res.send('404');
});
debugger;
app.listen(port);
console.log(`app is listening at port ${process.env.USER} as ${port}`);