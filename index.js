const express = require("express");
const app = express();
const public_folder = require("./lity-engine/lity");
const port = 81;
const hostname = "0.0.0.0";
//confugure pug engine
app.use(public_folder);
//lity-cms admin
app.get('/lity-admin', (req, res) =>{

});
app.get('*', (req, res) => {
  res.send("404");
});
debugger;
app.listen(port);
console.log(`app is listening at port ${process.env.USER} as ${port}`);