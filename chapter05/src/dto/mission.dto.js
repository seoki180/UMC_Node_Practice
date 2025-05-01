export class missionDTO{
    constructor(data = {}){
        const {store_index = 0, contents = "",point = 0, }= data
        this.store_index = store_index
        this.contents =contents
        this.point = point
    }
}