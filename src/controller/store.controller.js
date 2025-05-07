import { responsebase } from "../../response.js";
import { storeDTO } from "../dto/store.dto.js";
import { store_service } from "../service/store.service.js";

export class store_controller{
    static async addStore(req,res){
        const data = new storeDTO(req.body)
        
        try{
            const result = await store_service.addStore(data)
            return res.json(responsebase({
                success : true,
                message : "가게 생성 성공",
                code : 200
            },result))
        }
        catch(err){
            return res.json(responsebase({
                success : false,
                message : "가게 생성 실패",
                code : 400
            },err.message))
        }
    }
}