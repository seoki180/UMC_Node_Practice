import pool from "../config/db.config.js"

export class mission_model{
    static async insertMission(data){
        const query = `
        insert into MISSIONS(mission_Contents, mission_Point,store_Index)
        values(?,?,?)`
        const {store_index,contents, point} = data

        return new Promise((resolve,reject)=>{
            const res = pool.query(query,[contents, point,store_index],(err,result)=>{
                if(err) reject(err)
                else resolve(result)
            })
        })
    }
}