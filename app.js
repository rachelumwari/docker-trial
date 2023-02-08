const express = require('express');
const app = express()

app.get('/', (req, res)=> res.send('hey youtube'));

app.listen(3000, ()=>{
    console.log('My Rest API running on port 3000!');
    
})