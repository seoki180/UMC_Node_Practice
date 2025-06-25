export class userDTO{
    constructor(data = {},prefer_food = []){
        const {id = "", password = "",name =  "", gender = 0, birthday = '', address = '',method = ''}= data
        this.id = id
        this.password = data.password
        this.name = data.name
        this.gender = data.gender
        this.birthday = data.birthday
        this.address = data.address
        this.prefer_food = data.prefer_food
        this.method = data.method
    }
}