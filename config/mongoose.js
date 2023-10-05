const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/todo-List');
const db = mongoose.connection;
db.on('err', console.error.bind(console,"Erron connectin to DataBase"));
db.once('open',function(){
    console.log("connected to Data base")
})