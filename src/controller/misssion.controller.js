import { HttpStatusCode } from "axios"
import { responsebase } from "../../response.js"
import { missionAddDTO, missionStartDTO } from "../dto/mission.dto.js"
import { mission_service } from "../service/mission.service.js"

export class mission_controller{
    
    static async addMisison(req,res){
        /*
        #swagger.tags = ['Missions']
        #swagger.summary = '특정 가게에 새로운 미션 추가'
        #swagger.description = '가게 주인이 특정 가게에 대한 새로운 미션을 등록합니다.'
        #swagger.parameters['store_index'] = {
            in: 'path',
            required: true,
            description: '미션을 추가할 가게의 ID',
            schema: { type: 'integer', example: 1 }
        };
        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: { $ref: "#/components/schemas/MissionCreationRequest" }
                }
            }
        };
        #swagger.responses[200] = {
            description: '미션 추가 성공',
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            result: { type: "boolean", example: true },
                            error: { type: "object", nullable: true },
                            success: { $ref: "#/components/schemas/MissionCreationResponseData" }
                        }
                    }
                }
            }
        };
        #swagger.responses[400] = {
            description: '잘못된 요청 또는 가게 정보 없음',
            content: {
                "application/json": {
                    schema: { $ref: "#/components/schemas/ErrorResponse" }
                }
            }
        }
    */
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
        /*  #swagger.tags = ['Missions']
            #swagger.summary = '사용자가 특정 미션 시작'
            #swagger.description = "사용자가 특정 미션을 시작하여 '진행 중' 상태로 변경합니다."
            #swagger.parameters['mission_index'] = {
                in: 'path',
                required: true,
                description: '시작할 미션의 ID',
                schema: { type: 'integer', example: 15 }
            }
            #swagger.parameters['Authorization'] = {
                in: 'header',
                required: true,
                description: '사용자 식별자 (user_index)',
                schema: { type: 'string', example: '123' }
            }
            #swagger.responses[200] = {
                description: '미션 시작 성공',
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                result: { type: "boolean", example: true },
                                error: { type: "object", nullable: true },
                                success: { "$ref": "#/components/schemas/MissionStartResponseData" }
                            }
                        }
                    }
                }
            }
            #swagger.responses[400] = {
                description: '잘못된 요청 또는 미션/사용자 정보 없음',
                content: {
                    "application/json": {
                        schema: { "$ref": "#/components/schemas/ErrorResponse" }
                    }
                }
            }
        */
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
        /*  #swagger.tags = ['Missions']
            #swagger.summary = '내가 진행 중인 미션 목록 조회'
            #swagger.description = "현재 로그인한 사용자가 진행 중인 모든 미션 목록을 가져옵니다."
            #swagger.parameters['Authorization'] = {
                in: 'header',
                required: true,
                description: '사용자 식별자 (user_index)',
                schema: { type: 'string', example: '123' }
            }
            #swagger.responses[200] = {
                description: '미션 목록 조회 성공',
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                result: { type: "boolean", example: true },
                                error: { type: "object", nullable: true },
                                success: { type: "array", items: { "$ref": "#/components/schemas/MissionItem" } }
                            }
                        }
                    }
                }
            }
            #swagger.responses[401] = {
                description: '인증 실패 (사용자 정보 없음)',
                content: {
                    "application/json": {
                        schema: { "$ref": "#/components/schemas/ErrorResponse" }
                    }
                }
            }
        */
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
        /*  #swagger.tags = ['Missions']
            #swagger.summary = '사용자가 특정 미션 완료 처리'
            #swagger.description = "사용자가 진행 중인 특정 미션을 '완료' 상태로 변경하고 포인트를 지급받습니다."
            #swagger.parameters['mission_index'] = {
                in: 'path',
                required: true,
                description: '완료할 미션의 ID',
                schema: { type: 'integer', example: 15 }
            }
            #swagger.parameters['Authorization'] = {
                in: 'header',
                required: true,
                description: '사용자 식별자 (user_index)',
                schema: { type: 'string', example: '123' }
            }
            #swagger.responses[200] = {
                description: '미션 완료 성공',
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                result: { type: "boolean", example: true },
                                error: { type: "object", nullable: true },
                                success: { "$ref": "#/components/schemas/MissionCompleteResponseData" }
                            }
                        }
                    }
                }
            }
            #swagger.responses[400] = {
                description: '잘못된 요청, 미션/사용자 정보 없음, 또는 미션이 진행 중이 아님',
                content: {
                    "application/json": {
                        schema: { "$ref": "#/components/schemas/ErrorResponse" }
                    }
                }
            }
        */
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