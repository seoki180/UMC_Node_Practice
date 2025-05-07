import { review_model } from "../model/review.model.js";

export class review_service{
    static async addReview(data){
        const checkStore = await review_model.selectStoreIndex(data.store_index)
        
        if(checkStore.length==0){
            throw new Error("가게 정보가 존재하지 않습니다.")
        }
        const res = await review_model.insertReview(data)
        if(!res || res.length ==0){
            throw new Error("리뷰 작성 실패")
        }
        return res
    }
    static async getReviews(user_index){
        const res = await review_model.selectReviews(user_index)
        if(!res || res.length ==0){
            throw new Error("리뷰 조회 실패")
        }
        return res
    }

    static async getReviewsStore(store_index){
        const res = await review_model.selectReviewsStore(store_index)
        if(!res || res.length ==0){
            throw new Error("리뷰 조회 실패")
        }
        return res
    }
}