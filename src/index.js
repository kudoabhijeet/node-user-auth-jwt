const express = require('express');
const { db } = require('./database');
require('dotenv').config()

const PORT = process.env.PORT;
const app = express();

app.use(express.json())
app.use(express.urlencoded());

app.use('/api', require('./routes/api'));

db.authenticate()
.then(()=>{
    app.listen(PORT, ()=>{
    console.log(`Server and Database up and running on http://localhost:${PORT}`)
    console.log(typeof(SECRET))
    });
})
.catch(err =>{
    console.error(err);
})


