import pool from "../config/db.config.js"
export class user_model{
    static async insertUser(data){
        const query = `
        insert into USERS(user_Id,user_Password,user_Name,user_Address,user_Gender,user_Birth,user_Method)
        values(?,?,?,?,?,?,?)`
        const {id,password,name,gender,birth_day,address,method} = data

        return new Promise((resolve,reject)=>{
            const res = pool.query(query,[id,password,name,address,gender,birth_day,method],(err,result)=>{
                if(err) reject(err)
                else resolve(result)
            })
        })
    }
    static async updateUser(data){
        const {user_index, name, gender, birth_day, address, password} = data;
        
        const updateData = {};
        if (name) updateData.user_Name = name;
        if (gender) updateData.user_Gender = gender;
        if (birth_day) updateData.user_Birth = birth_day;
        if (address) updateData.user_Address = address;
        if (password) updateData.user_Password = password;

        const result = await prisma.USERS.updateMany({
            where: {
                user_index: user_index
            },
            data: updateData
        });
        return result;
    }
    static async loginUser(data){
        const query = `select * from USERS where user_Id = ?`
        const {id} = data
        return new Promise((resolve,reject)=>{
            const res = pool.query(query,[id],(err,result)=>{
                if(err) reject(err)
                else resolve(result)
            })
        })
    }
}