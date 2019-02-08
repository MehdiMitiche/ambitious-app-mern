const mongoose = require('mongoose')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const passport = require('passport')

//CRUD OPERATIONS
const getUser = (req, res) => {
    console.log('King In the North')
    console.log(req.userData)
    const query = {_id : req.userData.id}
    User.find(query, (err, user) => {
        res.json({ user })
    })
}

const addUser = (req, res) => {

}

const updateUser = (req, res) => {

}

const deleteUser = (req, res) => {

}

const register = (req, res) => {
    req.checkBody('username', 'The username is required').notEmpty();
    req.checkBody('email', 'The email is required').notEmpty();
    req.checkBody('password', 'The password is required').notEmpty();
    req.checkBody('passwordConf', "Password don't match").equals(req.body.password);


    const err = req.validationErrors()

    if (err) {
        const errMsg = [];
        for(i=0;i<err.length;i++){
            errMsg.push(err[i].msg)
        }
        res.json({
            err: errMsg
        })
    } else {
        const userData = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            passwordConf: req.body.passwordConf,
        }
        const newUser = new User(userData)
        newUser.save((err, user) => {

            if (err) {

                res.json({
                    err: err
                })
            } else {
                res.json({
                    user
                })
            }
        })
    }
}
const login = (req, res, next) => {
    req.checkBody('username', 'The Username is required').notEmpty();
    req.checkBody('password', 'The Password is required').notEmpty();

    const err = req.validationErrors()
    if(err) {
        const errMsg = [];
        for(i=0;i<err.length;i++){
            errMsg.push(err[i].msg)
        }
        console.log(errMsg)
        res.json({
            err: errMsg
        })
    }else{
        passport.authenticate('local', (err, user, info) => {
            if (err) { return next(err) }
            if (!user) {
                res.json({
                    err: ['User Not Find']
                })
            }
            req.logIn(user, (err) => {
                if (err) { return next(err); }
    
                const userData = {
                    id: user._id,
                    username: user.username,
                    password: user.password,
                    user: true
                }
            
                //Creating the Token
                jwt.sign(userData, 'SecretKeyHere', {
                    expiresIn: '1h'
                }, (err, token) => {
                    if (err) {
                        console.log('no Err')
                        res.json({
                            err: err
                        })
                    } else {
                        res.json(token)
                    }
                })
            });
        })(req, res, next)
    }
}

module.exports = {
    getUser,
    addUser,
    updateUser,
    deleteUser,
    register,
    login
}