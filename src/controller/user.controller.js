
import { responsebase } from "../../response.js";
import { userDTO } from "../dto/user.dto.js";
import { user_service } from "../service/user.service.js";

export class user_controller{
    static async registUser(req,res){
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