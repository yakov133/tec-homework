//targil object_persistence_1
const fs = require("fs");
function first() {
  let books = [
    {
      name: "lala",
      description: "hey",
      pages: 12,
    },
    {
      name: "baba",
      description: "there",
      pages: 22,
    },
    {
      name: "wawa",
      description: "to",
      pages: 32,
    },
    {
      name: "poo",
      description: "you",
      pages: 120,
    },
  ];
  fs.writeFileSync("All_Books", JSON.stringify(books));
}

function second(){
    let data = fs.readFileSync("All_Books","utf8");
    data = JSON.parse(data);
    let obj = data[0];
    for (const book of data) {
        if(book.pages < obj.pages){
            obj = book;
        }
    }
    console.log(`the shortest book is : ${obj.name} with ${obj.pages} pages`);
}
first();
second();