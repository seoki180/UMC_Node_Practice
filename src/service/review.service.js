import { NotExistUser,NotExist } from "../config/error.js";
import { review_model } from "../model/review.model.js";

export class review_service{
    static async addReview(data){
        const checkStore = await review_model.selectStoreIndex(data.store_index)
        
        if(checkStore.length==0){
            throw new NotExist(404,"가게 정보가 존재하지 않습니다.",checkStore)
        }
        const res = await review_model.insertReview(data)
        if(!res || res.length ==0){
            throw new NotExist(400,"리뷰 작성 실패",res)
        }
        return res
    }
    static async getReviews(user_index){
        const res = await review_model.selectReviews(user_index)
        if(!res || res.length ==0){
            throw new NotExist(404,"유저 정보가 존재하지 않습니다.",res)
        }
        return res
    }

    static async getReviewsStore(store_index){
        const res = await review_model.selectReviewsStore(store_index)
        if(!res || res.length ==0){
            throw new NotExist(404,"가게 정보가 존재하지 않습니다",res)
        }
        return res
    }
}