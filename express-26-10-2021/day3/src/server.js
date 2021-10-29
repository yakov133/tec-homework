const express = require("express");
const app = express();
const path = require("path");
const PORT = 8080;

const publickPath = path.join(__dirname, "..", "public");
app.use(express.static(publickPath));
app.use(express.json());

const tasks = [
  { id: 1, name: "yakov", date: "23/10/2021" },
  { id: 2, name: "kobi", date: "2/12/2000" },
  { id: 3, name: "kassa", date: "22/6/1994" },
];
let freeId = 4;

app.get("/", (req, res) => {
  res.send("index");
});

app.get("/task", (req, res) => {
  console.log("2");

  res.send(tasks);
});

app.post("/task", (req, res) => {
  // todo: add the new task to the array
  // todo: add name from request, add date , id , comleted
  const name = req.body.name;
  
 if(name == "" || name == " " || name == undefined){
  res.sendStatus(400);
 }else{
  const newTask = { id: freeId++, name, completed: false, date: new Date() };
  tasks.push(newTask)
  console.log(newTask);
  res.sendStatus(201);
 }
});

app.get("/task/:id", (req, res) => {
  const params = req.params;
  task = tasks.find(it => it.id == params.id);
  task ? res.send(task) : res.sendStatus(404);
});

app.delete("/del/:id",(req,res)=>{
  const id = req.params.id;
  const index = tasks.findIndex((task)=> task.id ==id )
  if(index == -1){
    res.sendStatus(404)
  }
  tasks.splice(index,1);
  res.sendStatus(200)

})

app.get("*", (req, res) => {
  res.send("go to /tasks url");
});

app.listen(PORT, () => {
  console.log(`start to listen on port ${PORT}`);
});
