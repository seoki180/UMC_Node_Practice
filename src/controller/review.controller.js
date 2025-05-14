import { HttpStatusCode } from "axios"
import { responsebase } from "../../response.js"
import { reviewDTO } from "../dto/review.dto.js"
import { review_service } from "../service/review.service.js"

export class review_controller{
    static async addReview(req,res){
        const store_index = req.params.store_index
        const user_index = req.headers.authorization
        const date = new Date()
        const body = req.body

        const data = new reviewDTO(body)
        data.store_index = store_index
        data.user_index = user_index
        data.created_date = date
        
        try{
            const result =  await review_service.addReview(data)
            res.status(HttpStatusCode.Ok).success(result)
        }
        catch(err){
            res.status(err.errorCode).error(err)
        }
    }

    static async getReviews(req,res){
        const user_index = parseInt(req.headers.authorization)
        try{
            const result = await review_service.getReviews(user_index)
            res.status(HttpStatusCode.Ok).success(result)
        }
        catch(err){
            res.status(err.errorCode).error(err)
        }
    }
    
    static async getReviewsStore(req,res){
        const store_index = parseInt(req.params.store_index)
        try{
            const result = await review_service.getReviewsStore(store_index)
            res.status(HttpStatusCode.Ok).success(result)
        }
        catch(err){
            res.status(err.errorCode).error(err)
        }
    }
}