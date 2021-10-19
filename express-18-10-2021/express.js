const express = require("express");
const path = require("path");
const app = express();
const PORT = 8080;


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"public/Html","index.html"));
})

app.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname,"public/Html","about.html"));
})
app.get("/testimonials",(req,res)=>{
    res.sendFile(path.join(__dirname,"public/Html","testimonials.html"));
})
app.get("/events",(req,res)=>{
    res.sendFile(path.join(__dirname,"public/Html","events.html"));
})
app.get("/mentoring",(req,res)=>{
    res.sendFile(path.join(__dirname,"public/Html","mentoring.html"));
})
app.get("/courses",(req,res)=>{
    res.sendFile(path.join(__dirname,"public/Html","courses.html"));
})
app.get("/contact",(req,res)=>{
    res.sendFile(path.join(__dirname,"public/Html","contact.html"));
})

app.listen(PORT);