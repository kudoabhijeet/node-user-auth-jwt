const express = require('express');
const  sequelize = require('./database/connect');
const PORT = 8080;

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended : true}));

app.use('/api', require('./routes/api'));

app.listen(PORT, ()=>{
    sequelize.authenticate();
    console.log(`Server and Database up and running on http://localhost:${PORT}`)
});