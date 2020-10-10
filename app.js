 //jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const path = require("path");



const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("home");
});

app.get("/About", function(req, res){
  res.render("About");
});
app.get("/Membership", function(req, res){
  res.render("Membership");
});
app.get("/Login", function(req, res){
  res.render("Login");
});

app.get("/Events", function(req, res){
  res.render("Events");
});
app.get("/Training", function(req, res){
  res.render("training");
});
app.get("/Certification", function(req, res){
  res.render("Certification");
});
app.get("/Awards", function(req, res){
  res.render("Awards");
});
app.get("/Contact", function(req, res){
  res.render("Contact");
});
app.get("/Blog", function(req, res){
  res.render("Blog");
});
app.get("/FAQ", function(req, res){
  res.render("FAQ");
});
app.get("/Jobs", function(req, res){
  res.render("Jobs");
});
app.get("/Press", function(req, res){
  res.render("Press");
});
app.get("/Privacy", function(req, res){
  res.render("Privacy");
});
app.get("/Tools", function(req, res){
  res.render("Tools");
});
app.get("/Chapters", function(req, res){
  res.render("Chapters");
});
app.get("/Partnership", function(req, res){
  res.render("Partnership");
});


let port = process.env.PORT;
if (port == null || port == ""){
  port = 3000;
}
app.listen(port, function() {
  console.log("Server  has started ");
});
