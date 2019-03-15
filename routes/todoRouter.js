const express = require('express');
const todoRouter = express.Router();
const verifyToken = require('../controllers/tokenController');

const todoController = require('../controllers/todoController');


todoRouter.get('/',verifyToken,todoController.getTodos)
todoRouter.post('/',verifyToken,todoController.addTodo)
todoRouter.put('/',verifyToken,todoController.updateTodo)
todoRouter.delete('/',verifyToken,todoController.deleteTodo)

module.exports = todoRouter;