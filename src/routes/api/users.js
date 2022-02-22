const { Router} = require('express');
const { createUser, verifyUser, getAllUsers, deleteUser, getUser } = require('../../controllers/user.controller.js');

const route = Router();

route.post('/signup', async (req,res)=> {
    const newUser = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    };
    try{
    const createdUser = await createUser(newUser);
        res.status(200).send(createdUser);
    }
    catch(e){
        res.status(404).send({
            error: e.message
        })
    }
})

route.post('/login', async(req,res) =>{
    const userReq = {
        email: req.body.email,
        password: req.body.password
    };
    try{
        const verifiedUser = await verifyUser(userReq);
        res.status(200).send(verifiedUser);
    }
    catch(e){
        res.status(404).send({
            error: e.message
        })
    }
});

// route.get('/all', async (req,res) =>{
//     try{
//         const allUsers = await getAllUsers();
//         res.send(allUsers);
//     }
//     catch(e){
//         res.status(500).send({
//             error : e.message
//         })
//     }
// });
route.get('/:id', async (req,res)=>{
    const userId = req.params.id;
    try{
        const resUser = await getUser(userId);
        res.status(200).send(resUser);
    }
    catch(e){
        res.status(404).send({
            error: e.message
        });
    }
})

route.delete('/:id', async (req,res)=>{
    const userId = req.params.id;
    try{
        const deletedUser = await deleteUser(userId);
        res.status(200).send(deletedUser);
    }
    catch(e){
        res.status(404).send({
            error: e.message
        });
    }
})



module.exports = route;