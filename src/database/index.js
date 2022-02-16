const Sequelize = require('sequelize');
require('dotenv').config()

const DB = process.env.DB_DB
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_PORT = process.env.DB_PORT

const db = new Sequelize({
    database: DB,
    username: DB_USER,
    password: DB_PASS,
    port: DB_PORT,
    dialect: 'postgres'
});

const Users = db.define('user',{
    username : {
        type : Sequelize.STRING,
        primaryKey: true,     
    },
    email : {
        type : Sequelize.STRING,
        unique: true,
        allowNull : false,
        validate: {
            isEmail : true  
        }
    },
    password : {
        type : Sequelize.STRING,
        allowNull : false
    }
}); 

module.exports = { db , Users};
