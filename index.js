import express from "express" //esModule
import { configDotenv } from "dotenv"
const app = express()


app.get("/",(req,res)=>{
    res.send("hello world")
})

app.listen(3000,()=>{
    console.log("open in 3000")
})