import pool from "../config/db.config.js"
import { prisma } from "../config/prisma.config.js"


export class mission_model{
    static async insertMission(data){
        const query = `
        insert into MISSIONS(mission_Contents,mission_Point,store_Index)
        values(?,?,?)`
        const {store_index,contents, point} = data

        return new Promise((resolve,reject)=>{
            const res = pool.query(query,[contents, point,store_index],(err,result)=>{
                if(err) reject(err)
                else resolve(result)
            })
        })
    }

    static async checkMission(data){
        const query = `
        select mission_status from USER_MISSION where user_index = ? and mission_index = ?
        `
        const {mission_index, user_index} = data

        return new Promise((resolve,reject)=>{
            const res = pool.query(query,[user_index,mission_index],(err,result)=>{
                if(err) reject(err)
                else resolve(result)
            })
        })
    }
    static async startMission(data){
        const query = `
        insert into USER_MISSION(mission_index,user_index,mission_status)
        values(?,?,1)
        `
        const {mission_index, user_index} = data

        return new Promise((resolve,reject)=>{
            const res = pool.query(query,[mission_index,user_index],(err,result)=>{
                if(err) reject(err)
                else resolve(result)
            })
        })
    }

    static async selectMissions(user_index) {
        const result = await prisma.USER_MISSION.findMany({
            where: {
                user_index: user_index
            },
            include : {
                mission : true
            }

        });
        return result
    }

    static async updateMissionComplete(user_index,mission_index){
        const result = await prisma.USER_MISSION.updateMany({
            where : {
                user_index : user_index,
                mission_index : mission_index
            },
            data : {
                mission_status : 2
            }
        })
        return result
    }

}