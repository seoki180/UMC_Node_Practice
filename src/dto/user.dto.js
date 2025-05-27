export class userDTO{
    constructor(data = {},prefer_food = []){
        const {id = "", password ="",name = "", gender = 0, birthday = '', address = '' }= data
        this.id = id
        this.password = password
        this.name = name
        this.gender = gender
        this.birthday = birthday
        this.address = address
        this.prefer_food = prefer_food
    }
}