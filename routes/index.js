const express = require('express');
const homeController = require("../controller/home_controller");
const router = express.Router();
const TodoList = require ('../models/todos') 

console.log("router running");

router.get('/',homeController.home);   
router.post('/add-todo-event',homeController.add);
router.post('/delete',homeController.delete);


module.exports = router;
