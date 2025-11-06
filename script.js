const express = require("express");
const path = require("path")
const port = 3636;

const app = express();

app.use(express.static(__dirname))


app.listen(3636, ()=>{
console.log("you have connected to localhost:3636")
})


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
})