const { Router} = require('express');
const { createUser, verifyUser } = require('../../controllers/user.controller.js');

const route = Router();

route.post('/signup', async (req,res)=> {
    // console.log(req.body);
    const newUser = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    };
    const createdUser = await createUser(newUser);
    res.send(createdUser);
})

route.post('/login', async(req,res) =>{
    const userReq = {
        email: req.body.email,
        password: req.body.password
    };

    try{
        const verifiedUser = await verifyUser(userReq);
        res.send(verifiedUser);
    }
    catch(e){
        res.status(403).send({
            error: e.message
        })
    }
    
    

})

route.get('/', (req,res) => {
    res.send({
        "user" : {
            "name" : "john doe",
            "email" : "xyz@abc.com",
            "password" : "xyz@123"
        }
    })
})
module.exports = route;