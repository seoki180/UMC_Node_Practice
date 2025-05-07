import pool from "../config/db.config.js"
import { prisma } from "../config/prisma.config.js"


export class review_model{
    static async insertReview(data){
        const {contents,star,store_index,user_index,created_date} = data
        const query = 
        `insert into
         REVIEWS(review_Contents,review_CreatedDay,review_Stars,store_index,user_index) 
         value(?,?,?,?,?)`

        return new Promise((resolve, reject)=>{
            const res = pool.query(query,[contents,created_date,star,store_index,user_index],(err,result)=>{
                if(err) reject(err)
                else resolve(result)
            })
        })
    }

    static async selectStoreIndex(store_index){
        const query = `
        select * from STORES where store_index =?`

        return new Promise((resolve,reject)=>{
            const res = pool.query(query,[store_index],(err,result)=>{
                if(err) reject(err)
                else resolve(result)
            })
        })
    }

    static async selectReviews(user_index){
        return result = await prisma.REVIEWS.findMany({
            where : {
                user_Index : user_index
            }
        })
    }

    static async selectReviewsStore(store_index){
        const result = await prisma.REVIEWS.findMany({
            where : {
                store_Index : store_index
            }
        })
        return result
    }
}


