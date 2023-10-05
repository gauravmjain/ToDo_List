const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    disc:{
        type : String,
        required: true
    },
    date : {
        type : String,
        required : true 
    },
    type : {
        type : String,
        require : false,
    },
})

const TodoList = mongoose.model('TodoList',todoSchema);

module.exports = TodoList;
