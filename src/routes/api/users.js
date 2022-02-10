const { Router} = require('express');

const route = Router();

route.get('/', (req,res) => {
    res.send({
        "user" : {
            "name" : "john doe",
            "age" : "21"
        }
    })
})
module.exports = route;