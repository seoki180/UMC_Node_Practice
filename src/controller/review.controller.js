import { HttpStatusCode } from "axios"
import { reviewDTO } from "../dto/review.dto.js"
import { review_service } from "../service/review.service.js"

export class review_controller{
    static async addReview(req,res){
        /*  #swagger.tags = ['Reviews']
            #swagger.summary = '특정 가게에 리뷰 추가'
            #swagger.description = '사용자가 특정 가게에 대한 리뷰를 작성합니다.'
            #swagger.parameters['store_index'] = {
                in: 'path',
                required: true,
                description: '리뷰를 추가할 가게의 ID',
                schema: { type: 'integer', example: 1 }
            }
            #swagger.parameters['Authorization'] = {
                in: 'header',
                required: true,
                description: '사용자 식별자 (user_index)',
                schema: { type: 'string', example: '123' }
            }
            #swagger.requestBody = {
                required: true,
                content: {
                    "application/json": {
                        schema: { "$ref": "#/components/schemas/ReviewCreationRequest" }
                    }
                }
            }
            #swagger.responses[200] = {
                description: '리뷰 추가 성공',
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                result: { type: "boolean", example: true },
                                error: { type: "object", nullable: true },
                                success: { "$ref": "#/components/schemas/ReviewCreationResponseData" }
                            }
                        }
                    }
                }
            }
            #swagger.responses[400] = {
                description: '잘못된 요청 또는 가게/사용자 정보 없음',
                content: {
                    "application/json": {
                        schema: { "$ref": "#/components/schemas/ErrorResponse" }
                    }
                }
            }
        */
        const store_index = req.params.store_index
        const user_index = req.headers.authorization
        const date = new Date()
        const body = req.body

        const data = new reviewDTO(body)
        data.store_index = store_index
        data.user_index = user_index
        data.created_date = date
        
        try{
            const result =  await review_service.addReview(data)
            res.status(HttpStatusCode.Ok).success(result)
        }
        catch(err){
            res.status(err.errorCode).error(err)
        }
    }

    static async getReviews(req,res){
        /*  #swagger.tags = ['Reviews']
            #swagger.summary = '내가 작성한 리뷰 목록 조회'
            #swagger.description = '현재 로그인한 사용자가 작성한 모든 리뷰 목록을 가져옵니다.'
            #swagger.parameters['Authorization'] = {
                in: 'header',
                required: true,
                description: '사용자 식별자 (user_index)',
                schema: { type: 'string', example: '123' }
            }
            #swagger.responses[200] = {
                description: '리뷰 목록 조회 성공',
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                result: { type: "boolean", example: true },
                                error: { type: "object", nullable: true },
                                success: { type: "array", items: { "$ref": "#/components/schemas/ReviewItem" } }
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
            const result = await review_service.getReviews(user_index)
            res.status(HttpStatusCode.Ok).success(result)
        }
        catch(err){
            res.status(err.errorCode).error(err)
        }
    }
    static async getReviewsStore(req,res){
        /*  #swagger.tags = ['Reviews']
            #swagger.summary = '특정 가게의 리뷰 목록 조회'
            #swagger.description = '지정된 가게 ID에 해당하는 모든 리뷰 목록을 가져옵니다.'
            #swagger.parameters['store_index'] = {
                in: 'path',
                required: true,
                description: '리뷰를 조회할 가게의 ID',
                schema: { type: 'integer', example: 1 }
            }
            #swagger.responses[200] = {
                description: '가게 리뷰 목록 조회 성공',
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                result: { type: "boolean", example: true },
                                error: { type: "object", nullable: true },
                                success: { type: "array", items: { "$ref": "#/components/schemas/ReviewItem" } }
                            }
                        }
                    }
                }
            }
            #swagger.responses[404] = {
                description: '가게를 찾을 수 없음',
                content: {
                    "application/json": {
                        schema: { "$ref": "#/components/schemas/ErrorResponse" }
                    }
                }
            }
        */
        
        const store_index = parseInt(req.params.store_index)
        try{
            const result = await review_service.getReviewsStore(store_index)
            res.status(HttpStatusCode.Ok).success(result)
        }
        catch(err){
            res.status(err.errorCode).error(err)
        }
    }
}