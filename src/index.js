const app = require('express')();
const PORT = 8080;

app.listen(PORT, ()=>{
    console.log(`Server up and running on http://localhost:${PORT}`)
});

app.get('/', (req,res)=>{
    res.send("Hello");
})