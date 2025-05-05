import { user_model } from "../model/user.model.js";

export class user_service{
    static async registUser(data) {
        const res = await user_model.insertUser(data)
        if(!res || res.length ==0){
            throw new Error("회원가입 실패")
        }
        return res
    }
}