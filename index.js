const express = require('express');
const app = express();
const port = 9000;
const path = require('path');
const db = require('./config/mongoose');


//setting up view Engine

app.set('view engine','ejs');
app.set('views','views');


//midleWear
app.use(express.urlencoded());

app.use(express.static(path.join(__dirname,'assets')));


app.use('/',require('./routes/index'));

// listener
app.listen(port,function(err){
    if(err){
        console.log("Error at port : ",port);
        return;
    }
    console.log("Server running on port : ",port);
});