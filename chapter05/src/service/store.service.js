import { responsebase } from "../../response.js";
import { store_model } from "../model/store.model.js";

export class store_service{
    static async addStore(data) {
        const res = await store_model.insertStore(data)
        
        return responsebase({
            success : true,
            message : "가게 생성 성공",
            code : 200
        },res)
    }
}