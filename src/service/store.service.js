import { responsebase } from "../../response.js";
import { NotExist } from "../config/error.js";
import { store_model } from "../model/store.model.js";

export class store_service{
    static async addStore(data) {
        const res = await store_model.insertStore(data)
        if(!res || res.length ==0){
            throw new NotExist(500,"가게 생성 실패",res)
        }
        return res
    }
}