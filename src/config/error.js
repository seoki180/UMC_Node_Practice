export class NotExistUser extends Error{
    errorCode = "U001"
    constructor(reason, data){
        super(reason);
        this.reason = reason;
        this.data = data;
    }
}
export class NotExist extends Error{
    constructor(errorCode,reason, data){
        super(reason);
        this.errorCode = parseInt(errorCode)
        this.reason = reason;
        this.data = data;
        this.stack = this.stack
    }
}

export function NotFound(req,res){
    res.status(404).json({
        result : false,
        error: { 
            errorCode: 404, 
            reason:"Not vaild Path", 
            data : null},
        success: null,
    })
}