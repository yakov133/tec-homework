var express = require("express");
var mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const url = "mongodb://localhost:27017/";
const dbName = "jsonplaceholder";
let ObjectId = mongodb.ObjectId;

function getTodos(req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db(dbName);
    dbo
      .collection("todos")
      .find({})
      .toArray(function (err, documents) {
        if (err) {
          console.log(err);
        }
        res.send(documents);
        db.close();
      });
  });
}

function newTodo(req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) {
      console.log(err);
    }
    let myobj = req.body;
    var dbo = db.db(dbName);

    dbo.collection("todos").insertOne(myobj, function (err, result) {
      if (err) throw err;
      console.log(result);
      res.sendStatus(201);
      db.close();
    });
  });
}

function deleteById(req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) {
      throw err;
    }
    var dbo = db.db(dbName);
  
    var myquery = { _id: ObjectId(req.params.id) };

    dbo.collection("todos").deleteOne(myquery, function (err, obj) {
      if (err) {
        throw err;
      }
      console.log(obj);
      res.sendStatus(200);
      db.close();
    });
  });
}

function updateById(req,res){

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(dbName);
    var myquery = {_id:ObjectId(req.params.id)};
    var newvalues = { $set: req.body };
    dbo.collection("todos").updateOne(myquery, newvalues, function(err, result) {
      if (err) throw err;
      res.send(result)
      db.close();
    });
  });
}


module.exports = { getTodos, newTodo, deleteById,updateById };


/*

MongoClient.connect(url, function (err, db) {
  if (err) {
    throw err;
  }
  var dbo = db.db(dbName);

  var myquery = { _id: ObjectId(req.params.id) };
  dbo.collection("todos").deleteOne(myquery, function (err, obj) {
    if (err) {
      throw err;
    }
    console.log(obj);
    res.sendStatus(200);
    db.close();
  });
});


*/