const bcrypt = require("bcrypt");
const { nanoid } = require("nanoid");
const { Users } = require('../database');
const { createJWT } = require('../utils/jwt');

async function createUser(userReq){
    if(!userReq.username){
        throw new Error('No username provided');
    }
    if(!userReq.email){
        throw new Error('No email provided');
    }
    if(!userReq.password){
        throw new Error('No password provided');
    }

    const salt = await bcrypt.genSalt(10);
    userReq.password = await bcrypt.hash(userReq.password, salt);
    userReq.id = nanoid();

    const user = await Users.create(userReq);

    if(!user) {
        throw new Error('Unable to create a user');
    }
    const createdUser = await Users.findOne({
        where: {
            email: user.email
        }
    });
    // creating a token 
    const token  = await createJWT(createdUser.get());
    delete createUser.password;
    return {
        ...createdUser.get(),
        token
    }
}

async function verifyUser(userReq){
    if(!(userReq.email && userReq.password)){
        throw new Error('Invalid input');
    }
    
    const user = await Users.findOne({
        where: {
            email : userReq.email
        }
    })

    if(!user) {
        throw new Error('Unable to find a user');
    }
    const validPass = await bcrypt.compare(userReq.password, user.password);
    if(!validPass){
        throw new Error('Incorrect Password');
    }
    // creating a signed token
    token = await createJWT(user.get());
    console.log("User", user);
    delete user.password;

    return {
        ...user.get(),
        token
    }
}

async function getAllUsers(){
    const allUsers = Users.findAll({
        attributes : ['username', 'email']
    });
    return allUsers;
}

async function getUser(userId){
    const user = await Users.findOne({
        attributes : ['id', 'username', 'email'],
        where : {
            id : userId
        }
    })

    if(!user){
        throw new Error("No user found with the provided ID");
    }
    return user;
}

async function deleteUser(userId){
    const deletedUser = await Users.findOne({
        where : {
            id : userId
        }
    })
    if(!deleteUser){
        throw new Error("No user found with the provided ID");
    }
    console.log(deletedUser.id);

    await deletedUser.destroy();
    return deletedUser;

}

module.exports = { createUser , verifyUser, deleteUser, getUser, getAllUsers};