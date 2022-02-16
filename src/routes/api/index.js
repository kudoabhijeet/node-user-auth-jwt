const { Router } = require('express');
const { userAuth } = require('../../middleware/auth');

const route = Router();

route.use('/user', userAuth, (req,res) =>{
    if(req.user){
        res.send(req.user);
    }
});
route.use('/users', require('./users'));

module.exports = route;