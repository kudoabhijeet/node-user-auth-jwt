const jwt = require('jsonwebtoken');
require('dotenv').config()

const SECRET_KEY = process.env.JWT_SECRET;


async function createJWT(user){
    const token = jwt.sign(user, SECRET_KEY)
    return token;
}

async function verifyJWT(token){
    const user = jwt.verify(token, SECRET_KEY);
    return user;
}

module.exports = {
    createJWT,
    verifyJWT
};