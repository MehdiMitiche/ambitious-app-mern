const Todo = require('../models/Todo');

getTodos = (req , res) =>{
    Todo.find((err , todos) =>{
        if(err){
            res.json({
                err
            })
        }else{
            res.json(todos)
        }
    })
}

addTodo = (req , res) =>{
    req.checkBody('title', 'The title is required').notEmpty();
    req.checkBody('description', 'The description is required').notEmpty();

    const err = req.validationErrors();

    if(err){
        const errMsg = [];
        for(i=0;i<err.length;i++){
            errMsg.push(err[i].msg)
        }
        res.json({
            err : errMsg
        })
    }else{
        const newTodo = new Todo({
            author : 'mehdi',
            description : req.body.description,
            title : req.body.title
        })

        newTodo.save((err , todo) =>{
            if(err){
                res.json({
                    err : err
                })
            }else{
                res.json({
                    todo
                })
            }
        })
    }
}

updateTodo = (req , res) =>{
    
}

deleteTodo = (req , res) =>{
    
}

module.exports = {
    getTodos,
    addTodo,
    updateTodo,
    deleteTodo,
}