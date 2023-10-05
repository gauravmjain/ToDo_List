const express = require('express');

const TodoList = require('../models/todos') ;

// TodoList.find()

let category = ["Personal","Work","School","Urgent","Important","Other"];


// Home page
module.exports.home = async function(req,res){
    try{
        let data = await TodoList.find({});
        if(data){
            console.log("Inside")
            return res.render('home',{
                title : "Todo List Home Page",
                todos : data,           
                type : category,
            })
        }
    }
    catch(err){
        console.log("Error to fetching data at todo list",err);
        return ;
    }
    // TodoList.find({},function(err,data){
    //     if(err){
           
    //     }
        
    // })
}

// Add todo elements

module.exports.add = function(req,res){
    // console.log(req.body);
    // let temp = require('../assets/js/home');
    if(req.body.type == 'category'){
        req.body.type = "";
    }
    TodoList.create({
        disc : req.body.discription,
        date : req.body.date,
        type : req.body.type,
    },function(err,data){
        if(err){
            console.log("error at posting of todo list",err)
            return;
        }
        // console.log(data);
        return res.redirect('back')
})

    // return res.redirect("back");
}


// Delete ToDos

module.exports.delete = function(req,res){
    let toDelete = req.body.checked;
    // console.log(typeof(toDelete));
    if(typeof(toDelete) == 'string'){
        TodoList.deleteOne({"_id":toDelete},function(err,data){
            if(err){
                console.log("error at delteting todo");
                return;
            }
        })
    }else if(typeof(toDelete) == 'object'){
        for (let i of toDelete){
            TodoList.deleteOne({"_id": i},function(err,data){
                if(err){
                    console.log("error at delteting todo");
                    return;
                }
            })
        }
    }
    return res.redirect('back');
}