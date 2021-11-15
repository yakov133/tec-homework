const MongoDB = require("mongodb");
var MongoClient = MongoDB.MongoClient;
var url = "mongodb://localhost:27017";
const ObjectId = MongoDB.ObjectId;

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("jsonplaceholder");

  const obj = {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  };

  // newCollection(dbo,"todos");
  addNewTodo(dbo,"todos",obj);
});

//todo - this function create a new collection with the given name
//! param: db : database name 
//!         collectionName: the new collection name.
function newCollection(db,collectionName){
    db.createCollection(collectionName, function(err, coll) {
        if (err){
            console.log(err);
        }
        console.log(coll);
      });
};
//todo - this function create a new document with the given object.
/*
  params: database, collection name, document
*/
function addNewTodo(db,collectionName,todo){
    db.collection(collectionName).insertOne(todo, function(err, res) {
        if (err){
            console.log(err);
        }
        console.log(res);
      });
}