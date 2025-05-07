export class storeDTO{
    constructor(data = {}){
        const {name = "", location = "",area_index = 0, }= data
        this.name = name
        this.location = location
        this.area_index = area_index
    }
}