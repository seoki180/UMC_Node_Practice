import { NotExist } from "../config/error.js"
import { mission_model } from "../model/mission.model.js"

export class mission_service{
    static async addMission(data){
        const check = await mission_model.selectStore(data)
        if(!check || check.length ==0){
            throw new NotExist(404,"가게 정보가 존재하지 않습니다.",check)
        }
        const res = await mission_model.insertMission(data)
        if(!res || res.length ==0){
            throw new NotExist(400,"미션 생성 실패",res)
        }
        return res
    }

    static async startMission(data){
        const check = await mission_model.checkMission(data)
        if(check.length != 0 && check[0].mission_status == 1){
            throw new NotExist(400,"이미 진행중인 미션입니다.",check)
        }

        const res = await mission_model.startMission(data)
        if(!res || res.length ==0){
            throw new NotExist(500,"미션 시작 실패",res)
        }
        return res
    }

    static async getMissions(user_index){
        const res = await mission_model.selectMissions(user_index)
        if(!res || res.length ==0){
            throw new NotExist(500,"미션 조회 실패",res)
        }
        return res
    }

    static async completeMission(user_index,mission_index){
        const res = await mission_model.updateMissionComplete(user_index,mission_index)
        if(!res || res.length ==0){
            throw new NotExist(500,"미션 완료 실패",res)
        }
        return res
    }
}
