const express=require("express");
const app=express();
let port=8080;
app.get("/http://127.0.0.1:3000/index.html",(req,res)=>{
    res.send("click");
})