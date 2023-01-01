const express=require("express")
const app=express()
const path=require("path")
app.get("/",(req,res)=>{
    res.send("hei i am alive")
})
app.get("/home",(req,res)=>{

    res.sendFile(path.join(__dirname,"./public/index.html"));
})
app.listen(5000,()=>{
    console.log('listening the port 3000');
})