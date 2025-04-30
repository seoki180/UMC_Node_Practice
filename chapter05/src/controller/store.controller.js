import { storeDTO } from "../dto/store.dto.js";
import { store_service } from "../service/store.service.js";

export class store_controller{
    static async addStore(req,res){
        const data = new storeDTO(req.body)
        const result = await store_service.addStore(data)

        res.status(result.code)
        return res.json(result)
    }
}