import {Router} from "express"
import { mission_controller } from "../controller/misssion.controller.js"
const mission_Router = Router()


mission_Router.post('/:store_index/add',mission_controller.addMisison)
mission_Router.post("/:mission_index/start",mission_controller.startMission)
mission_Router.get("/",mission_controller.getMissions)
mission_Router.patch("/:mission_index/complete",mission_controller.completeMission)

export default mission_Router