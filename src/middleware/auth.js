const { verifyJWT } = require('../utils/jwt');

async function userAuth(req,res,next){
    const auth = req.header('Authorization');
    if(!auth){
        return res.status(403).send({
            "error" : "Not Logged in",
        })
    }
    
    const token = auth.substr(6);
    try{
        const user = await verifyJWT(token);
        req.user = user;
        return next(); //calls the normal route
    }
    catch(err){
        return res.status(403).send({
            "error" : "JWT verify fail!",
        })
    }

}


module.exports = {
    userAuth
}