var express = require('express');
var app = express();
var bGround = require('fcc-express-bground');
require('dotenv').config();

app.use(function(req, res, next) {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});

bGround.log("Hello World");
console.log("Hello World");

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");  
  });
  
app.use("/public", express.static(__dirname + "/public"));
  
app.get("/json", function(req, res) {
    if(process.env.MESSAGE_STYLE === "uppercase") {
      res.json(
        {"message": "HELLO JSON"}
      )
    }else {
      res.json(
        {"message": "Hello json"}
      )
    }
  });

function getCurrentTimeString() {
    return new Date().toString();
}

app.get("/now", function(req, res, next) {
    req.time = getCurrentTimeString();
    next();
}, function(req, res) {
    res.json({time: req.time});
});

app.get("/:word/echo", function(req, res) {
    res.json({echo: req.params.word});
});




























 module.exports = app;
