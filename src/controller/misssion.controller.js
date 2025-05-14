import { HttpStatusCode } from "axios"
import { responsebase } from "../../response.js"
import { missionAddDTO, missionStartDTO } from "../dto/mission.dto.js"
import { mission_service } from "../service/mission.service.js"

export class mission_controller{
    static async addMisison(req,res){
        const store_index = req.params.store_index
        const body =req.body
        body.store_index = parseInt(store_index)

        const data = new missionAddDTO(body)

        try{
            const result = await mission_service.addMission(data)
            return res.status(HttpStatusCode.Ok).success(result)
        }
        catch(err){
            return res.status(err.errorCode).error(err)
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
            return res.status(HttpStatusCode.Ok).success(result)
        }
        catch(err){
            return res.status(err.errorCode).error(err)
        }
    }

    static async getMissions(req,res){
        const user_index = parseInt(req.headers.authorization)
        try{
            const result = await mission_service.getMissions(user_index)
            return res.status(HttpStatusCode.Ok).success(result)
        }
        catch(err){
            return res.status(err.errorCode).error(err)
        }
    }

    static async completeMission(req,res){
        const user_index = parseInt(req.headers.authorization)
        const mission_index = parseInt(req.params.mission_index)

        try{
            const result = await mission_service.completeMission(user_index,mission_index)
            return res.status(HttpStatusCode.Ok).success(result)
        }
        catch(err){
            return res.status(err.errorCode).error(err)
        }
    }
}