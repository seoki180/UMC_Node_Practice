import { responsebase } from "../../response.js"
import { reviewDTO } from "../dto/review.dto.js"
import { review_service } from "../service/review.service.js"

export class review_controller{
    static async addReview(req,res){
        const date = new Date()
        const store_index = req.params.store_index
        const data = new reviewDTO(req.body)
        data.store_index = store_index
        data.created_date = date
        
        try{
            const result =  await review_service.addReview(data)
            return res.json(responsebase({
                success : true,
                message : "리뷰 작성 성공",
                code : 200
            },result))
        }
        catch(err){
            return res.json(responsebase({
                success : false,
                message : "리뷰 작성 실패",
                code : 400
            },err.message))
        }
    }
}