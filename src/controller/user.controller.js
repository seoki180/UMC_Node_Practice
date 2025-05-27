
import { HttpStatusCode } from "axios"; // HttpStatusCode 사용을 위해 추가 (만약 정의되어 있다면)
import { responsebase } from "../../response.js";
import { userDTO } from "../dto/user.dto.js";
import { user_service } from "../service/user.service.js";

export class user_controller{
    static async registUser(req,res){
        /*  #swagger.tags = ['Users']
            #swagger.summary = '사용자 회원가입'
            #swagger.description = '새로운 사용자를 시스템에 등록합니다.'
            #swagger.requestBody = {
                required: true,
                content: {
                    "application/json": {
                        schema: { "$ref": "#/components/schemas/UserRegistrationRequest" }
                    }
                }
            }
            #swagger.responses[200] = {
                description: '회원가입 성공',
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                result: { type: "boolean", example: true },
                                error: { type: "object", nullable: true },
                                success: { "$ref": "#/components/schemas/UserRegistrationResponseData" }
                            }
                        }
                    }
                }
            }
            #swagger.responses[400] = {
                description: '잘못된 요청 또는 유효성 검사 실패',
                content: {
                    "application/json": {
                        schema: { "$ref": "#/components/schemas/ErrorResponse" }
                    }
                }
            }
        */
        
        const body = {
            name:req.body.name,
            gender:req.body.gender,
            birthday:req.body.birthday,
            address : req.body.address,
            id : req.body.id,
            password : req.body.password
        }
        const prefer_food = req.body.prefer_food

        const data = new userDTO(body,prefer_food)  
        try{
            const result = await user_service.registUser(data)
            return res.status(HttpStatusCode.Ok).success(result)
        }
        catch(err){
            return res.status(err.errorCode).error(err)
        }
    }
}