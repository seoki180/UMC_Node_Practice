import { responsebase } from "../../response.js"
import { missionAddDTO, missionStartDTO } from "../dto/mission.dto.js"
import { mission_service } from "../service/mission.service.js"

export class mission_controller{
    static async addMisison(req,res){
        const store_index = req.params.store_index
        const body =req.body
        body.store_index = store_index

        const data = new missionAddDTO(body)

        try{
            const result = await mission_service.addMission(data)
            return res.json(responsebase({
                success : true,
                message : "미션 생성 성공",
                code : 200
            },result))
        }
        catch(err){
            return res.json(responsebase({
                success : false,
                message : "미션 생성 실패",
                code : 400
            },err.message))
        }
    }

    static async startMission(req,res){
        const mission_index = req.params.mission_index
        const user_index = req.headers.authorization
        const body = {}

        body.mission_index = mission_index
        body.user_index = user_index


        const data = new missionStartDTO(body)

        try{
            const result = await mission_service.startMission(data)
            return res.json(responsebase({
                success : true,
                message : "미션 시작 성공",
                code : 200
            },result))
        }
        catch(err){
            return res.json(responsebase({
                success : false,
                message : "미션 시작 실패",
                code : 400
            },err.message))
        }
    }
}