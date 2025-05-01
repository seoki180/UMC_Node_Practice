import { mission_model } from "../model/mission.model.js"

export class mission_service{
    static async addMission(data){
        const res = await mission_model.insertMission(data)
        if(!res || res.length ==0){
            throw new Error("미션 생성 실패")
        }
        return res
    }

    static async startMission(data){
        const check = await mission_model.checkMission(data)
        if(check.length != 0 && check[0].mission_status == 1){
            throw new Error("이미 진행중인 미션입니다.")
        }

        const res = await mission_model.startMission(data)
        if(!res || res.length ==0){
            throw new Error("미션 시작 실패")
        }
        return res
    }
}