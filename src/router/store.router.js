import { Router } from "express"
import { store_controller } from "../controller/store.controller.js"

const store_Router = Router()

store_Router.post('/add', store_controller.addStore)

export default store_Router 