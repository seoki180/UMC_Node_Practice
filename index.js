import express from "express" //esModule
const app = express()


app.get("/",(req,res)=>{
    res.send("hello world")
})

app.listen(3000,()=>{
    console.log("open in 3000")
})