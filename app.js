const express=require("express")
const app=express()
app.get("/",(req,res)=>{
    res.send("hei i am alive")
})
app.listen(3000,()=>{
    console.log('listening the port 8000')
})