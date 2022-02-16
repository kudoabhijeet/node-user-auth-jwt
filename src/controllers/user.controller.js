const bcrypt = require("bcrypt");

const { Users } = require('../database');
const { createJWT } = require('../utils/jwt');


async function createUser(userReq){
    if(!userReq.username){
        throw new Error('No username');
    }
    if(!userReq.email){
        throw new Error('No email');
    }
    if(!userReq.password){
        throw new Error('No email');
    }

    const salt = await bcrypt.genSalt(10);
    userReq.password = await bcrypt.hash(userReq.password, salt);

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
module.exports = { createUser , verifyUser};