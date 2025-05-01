import { mission_model } from "../model/mission.model.js"

export class mission_service{
    static async addMission(data){
        const res = await mission_model.insertMission(data)
        if(!res || res.length ==0){
            throw new Error("미션 생성 실패")
        }
        return res
    }
}