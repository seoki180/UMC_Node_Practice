import { Router } from "express"
import { review_controller } from "../controller/review.controller.js"

const review_Router = Router()

review_Router.post('/:store_index/add', review_controller.addReview)
review_Router.get('/', review_controller.getReviews)
review_Router.get('/:store_index/store', review_controller.getReviewsStore)


export default review_Router 