import { responsebase } from "../../response.js"
import { missionDTO } from "../dto/mission.dto.js"
import { mission_service } from "../service/mission.service.js"

export class mission_controller{
    static async addMisison(req,res){
        const store_index = req.params.store_index
        const body =req.body
        body.store_index = store_index

        const data = new missionDTO(body)

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
}