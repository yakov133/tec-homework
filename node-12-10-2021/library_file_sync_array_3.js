// targil library_file_sync_array_3
const allFunction = require("./functions")
const fs = require("fs");

let operation = process.argv[2];
let name = process.argv[3];
let athor = process.argv[4];
let pages = parseInt(process.argv[5]);

switch (operation) {
  case "add":
    allFunction.add(name, athor, pages);
    break;
  case "update":
    allFunction.update(name, athor, pages);
    break;
  case "delete":
    allFunction.deleteBook(name);
    break;
  case "getAll":
    allFunction.getAll();
    break;
  case "search":
    allFunction.search(name);
    break;

  default:
    console.log(`Can't understand the operation pleas try again!!!`);
    break;
}
