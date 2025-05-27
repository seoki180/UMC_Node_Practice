import pool from "../config/db.config.js"
export class user_model{
    static async insertUser(data){
        const query = `
        insert into USERS(user_Id,user_Password,user_Name,user_Address,user_Gender,user_Birth)
        values(?,?,?,?,?,?)`
        const {id,password,name,gender,birth_day,address,prefer_food} = data

        return new Promise((resolve,reject)=>{
            const res = pool.query(query,[id,password,name,address,gender,birth_day],(err,result)=>{
                if(err) reject(err)
                else resolve(result)
            })
        })
    }
}