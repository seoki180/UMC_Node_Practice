import db from "../../config/db.js"


let q1 = `select * from USERS`

db.query(q1,(err,res)=>{
    if(err) throw err
    console.log(res)
})

db.end()