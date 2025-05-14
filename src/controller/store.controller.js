import { responsebase } from "../../response.js";
import { storeDTO } from "../dto/store.dto.js";
import { store_service } from "../service/store.service.js";

export class store_controller{
    static async addStore(req,res){
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