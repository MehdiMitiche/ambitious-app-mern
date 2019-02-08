const express = require('express'); 
const userRouter = express.Router(); 
const verifyToken = require('../controllers/tokenController')


const userController = require('../controllers/userController')



userRouter.post('/', userController.addUser)
userRouter.get('/',verifyToken,userController.getUser)
userRouter.put('/:id',userController.updateUser)
userRouter.delete('/',userController.deleteUser)

module.exports = userRouter