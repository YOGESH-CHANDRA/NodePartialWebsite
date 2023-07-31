const express = require("express");
const port = process.env.PORT || 8000;


const app = express();


app.get("/" , (req,res)=>{
 res.send("My home page");
})
app.get("/about" , (req,res)=>{
 res.send("My about page");
})
app.get("/contact" , (req,res)=>{
 res.send("My contact page");
})
app.get("/career" , (req,res)=>{
 res.send("My caree page");
})

app.listen(port, ()=>console.log(`Server is running on port no. ${port}`))