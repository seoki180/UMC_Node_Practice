export class missionAddDTO{
    constructor(data = {}){
        const {store_index = 0, contents = "",point = 0, }= data
        this.store_index = store_index
        this.contents =contents
        this.point = point
    }
}

export class missionStartDTO{
    constructor(data = {}){
        const {mission_index = 0, user_index = 0}= data
        this.mission_index = mission_index
        this.user_index = user_index
    }
}