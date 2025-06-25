import { NotExist } from "../config/error.js";
import { user_model } from "../model/user.model.js";
import { verifyPassword } from "../config/crypto.js";

export class user_service{
    static async registUser(data) {
        const res = await user_model.insertUser(data)
        if(!res || res.length ==0){
            throw new NotExist(500,"회원가입 실패",res)
        }
        return res
    }
    static async updateUser(data) {
        const res = await user_model.updateUser(data)
        if(!res || res.length ==0){
            throw new NotExist(500,"회원정보 수정 실패",res)
        }
        return res
    }
    static async loginUser(data) {
        const res = await user_model.loginUser(data)
        const hashingData = [data.password, res[0].user_Salt, res[0].user_Password]
        const verified = await verifyPassword(hashingData)
        if(!verified){
            throw new NotExist(500,"비밀번호가 일치하지 않습니다.",res)
        }
        if(!res || res.length ==0){
            throw new NotExist(500,"로그인 실패",res)
        }
        return res
    }
}