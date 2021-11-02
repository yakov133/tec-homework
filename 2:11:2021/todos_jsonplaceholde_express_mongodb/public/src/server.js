var express = require("express");
var mongodb = require("mongodb");
var app = express();
app.use(express.json());
const MongoClient = mongodb.MongoClient;
const url = "mongodb://localhost:27017/";
const dbName = "jsonplaceholder";
const PORT = 8080;
const utilis = require("./utilies");

app.get("/todos", function (req, res) {
  utilis.getTodos(req, res);
});

app.post("/todos", function (req, res) {
    utilis.newTodo(req, res);
});

app.delete("/todos/:id",function(req,res){
    utilis.deleteById(req,res);
})

app.patch("/todos/:id",function(req,res){
    utilis.updateById(req,res);
})

app.get("*", function (req, res) {
  res.send("NOT EXISIT PAGE");
});

app.listen(PORT, () => {
  console.log(`start to listing on port ${PORT}`);
});
