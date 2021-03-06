//targil library_file_sync_array_1 + library_file_sync_array_2
const fs = require("fs");

let librery;
try {
    librery = JSON.parse(fs.readFileSync("Librery.json"));
} catch (error) {
    librery = []
};

function searchIndex(name, athor, pages) {
  for (let i = 0; i < librery.length; i++) {
    if (
      librery[i].name == name &&
      librery[i].athor == athor &&
      librery[i].pages == pages
    ) {
      return i;
    }
  }
  return -1;
}

function add(name, athor, pages) {
  try {
    if (searchIndex(name, athor, pages) == -1) {
      librery.push({ name, athor, pages });
      console.log(`adding the book ${name} was successfuly!`);
    } else {
      throw `the book ${name} is already exist!`;
    }
  } catch (error) {
    console.log(error);
  }
}

function update(name, athor, pages) {
  let index = searchIndex(name, athor, pages);
  if (index != -1) {
    console.log(`adding 10 pages to book ${name}`);
    console.log(librery[index]);
    librery[index].pages += 10;
    console.log(librery[index]);
  } else {
    console.log(`THE BOOK ${name} IS NOT EXIST!`);
  }
}

function deleteBook(name) {
  let index = -1;
  for (let i = 0; i < librery.length; i++) {
    if (librery[i].name == name) {
      index = i;
      break;
    }
  }
  if (index != -1) {
    console.log(`Deleting the book ${name} from the librery was SUCCESSFULT`);
    librery.splice(index, 1);
  } else {
    console.log(`THE BOOK ${name} IS NOT EXIST!`);
  }
}

function getAll() {
  for (const iterator of librery) {
    console.log(iterator);
  }
}

function search(name){
    let index = -1;
    for (let i = 0; i < librery.length; i++) {
      if (librery[i].name == name) {
        index = i;
        break;
      }
    }
    if (index != -1) {
        console.log(`Found the book ${name} at the librery`);
        console.log(librery[index]);
      } else {
        console.log(`THE BOOK ${name} IS NOT EXIST!`);
      }
}

let operation = process.argv[2];
let name = process.argv[3];
let athor = process.argv[4];
let pages = parseInt(process.argv[5]);



switch (operation) {
  case "add":
    add(name, athor, pages);
    break;
  case "update":
    update(name, athor, pages);
    break;
  case "delete":
    deleteBook(name);
    break;
  case "getAll":
    getAll();
    break;
  case "search":
    search(name);
    break;

  default:
    console.log(`Can't understand the operation pleas try again!!!`);
    break;
}

fs.writeFileSync("Librery.json",JSON.stringify(librery));



