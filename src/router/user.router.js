import { Router } from "express"
import { user_controller } from "../controller/user.controller.js"

const user_Router = Router()

user_Router.post('/register', user_controller.registUser)

user_Router.patch('/update', user_controller.updateUser)

user_Router.post('/login', user_controller.loginUser)

export default user_Router 