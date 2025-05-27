import { HttpStatusCode } from "axios"; // HttpStatusCode 사용을 위해 추가
import { responsebase } from "../../response.js";
import { storeDTO } from "../dto/store.dto.js";
import { store_service } from "../service/store.service.js";

export class store_controller{
    
    static async addStore(req,res){
        /*  #swagger.tags = ['Stores']
            #swagger.summary = '새로운 가게 추가'
            #swagger.description = '시스템에 새로운 가게 정보를 등록합니다.'
            #swagger.requestBody = {
                required: true,
                content: {
                    "application/json": {
                        schema: { "$ref": "#/components/schemas/StoreCreationRequest" }
                    }
                }
            }
            #swagger.responses[200] = {
                description: '가게 추가 성공',
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                result: { type: "boolean", example: true },
                                error: { type: "object", nullable: true },
                                success: { "$ref": "#/components/schemas/StoreCreationResponseData" }
                            }
                        }
                    }
                }
            }
            #swagger.responses[400] = {
                description: '잘못된 요청',
                content: {
                    "application/json": {
                        schema: { "$ref": "#/components/schemas/ErrorResponse" }
                    }
                }
            }
        */
        const data = new storeDTO(req.body)
        
        try{
            const result = await store_service.addStore(data)
            return res.status(HttpStatusCode.Ok).success(result)
        }
        catch(err){
            return res.status(err.errorCode).error(err)
        }
    }
}