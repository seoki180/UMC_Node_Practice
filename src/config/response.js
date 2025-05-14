export function response(req,res,next){
    res.success = (success) => {
        return res.json({ 
            result : true, 
            error: null,
            success });
    };
    next()
    
    res.error = ({ errorCode = 500, reason = null, data = null , stack = null}) => {
    return res.json({
        result : false,
        error: { errorCode, reason, data,stack},
        success: null,
        });
    };

}