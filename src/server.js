const app = require('.');
const { db } = require('./database');


const PORT = process.env.PORT;

db.sync()
.then(()=>{
    app.listen(PORT, ()=>{
    console.log(`Server and Database up and running on http://localhost:${PORT}`)
    });
})
.catch(err =>{
    console.error(err);
})