const fs = require("fs");

let librery;
function makeArray() {
  try {
    librery = JSON.parse(fs.readFileSync("Librery.json"));
  } catch (error) {
    librery = [];
  }
}

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
module.exports.data = librery;

function add(name, athor, pages) {
  makeArray();
  try {
    if (searchIndex(name, athor, pages) == -1) {
      librery.push({ name, athor, pages });
      console.log(`adding the book ${name} was successfuly!`);
      fs.writeFileSync("Librery.json", JSON.stringify(librery));
    } else {
      throw `the book ${name} is already exist!`;
    }
  } catch (error) {
    console.log(error);
  }
}
module.exports.add = add;

function update(name, athor, pages) {
  makeArray();
  let index = searchIndex(name, athor, pages);
  if (index != -1) {
    console.log(`adding 10 pages to book ${name}`);
    console.log(librery[index]);
    librery[index].pages += 10;
    console.log(librery[index]);
    fs.writeFileSync("Librery.json", JSON.stringify(librery));
  } else {
    console.log(`THE BOOK ${name} IS NOT EXIST!`);
  }
}
module.exports.update = update;

function deleteBook(name) {
  makeArray();
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
    fs.writeFileSync("Librery.json", JSON.stringify(librery));
  } else {
    console.log(`THE BOOK ${name} IS NOT EXIST!`);
    fs.writeFileSync("Librery.json", JSON.stringify(librery));
  }
}
module.exports.deleteBook = deleteBook;

function getAll() {
  makeArray();
  if (librery.length != 0) {
    for (const iterator of librery) {
      console.log(iterator);
    }
  }else{
      console.log(`the librery is empty`);
  }
}
module.exports.getAll = getAll;

function search(name) {
  makeArray();
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
module.exports.search = search;
