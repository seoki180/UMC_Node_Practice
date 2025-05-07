import pool from "../config/db.config.js"

export class store_model{
    static async insertStore(data){
        const query = `
        insert into STORES(store_name,store_location,area_index)
        values(?,?,?)`
        const {name,location,area_index} = data

        return new Promise((resolve,reject)=>{
            const res = pool.query(query,[name,location,area_index],(err,result)=>{
                if(err) reject(err)
                else resolve(result)
            })
        })
    }
}