import db from "../../config/db.js"

let adduser = `insert into TEST values(?,?)`

db.query(adduser,[1,"seoki"],(err,res)=>{
    if(err) throw err
    console.log(res)
})

db.end()