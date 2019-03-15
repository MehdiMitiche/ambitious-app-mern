const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
const jwt = require('jsonwebtoken')
const expressValidator = require('express-validator')
const session = require('express-session')
const passport = require('passport')

const app = express()

const userRouter = require('./routes/userRoutes')
const adminRouter = require('./routes/adminRoutes')
const authRouter = require('./routes/authRoutes')
const todoRouter = require('./routes/todoRouter')

//VerifyTokenMiddelware
const verifyToken = require('./controllers/tokenController')


//the Path to the database
mongoose.connect('mongodb://localhost/Mentor')

const db = mongoose.connection
db.once('open', () => {
    console.log('Db Connected !')
})

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug');

//Body-Parser MiddelWar
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//Using Express-session middleware
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
}))


require('./config/passport')(passport);
//Passport Middelware
app.use(passport.initialize())
app.use(passport.session())

app.use(express.static(path.join(__dirname, 'public')))

//Express Validator
app.use(expressValidator())


app.get('/', (req, res) => {
    res.json({text : "MEntor Link Is Coming"})
})

//authentification Needed
app.get('/post', verifyToken, (req, res) => {
    res.send({
        userData: req.userData
    })

})

app.use('/user', userRouter)
app.use('/admin', adminRouter)
app.use('/auth', authRouter)
app.use('/todo',todoRouter)

app.listen(8080, () => {
    console.log('Server Lunched In Port 8080')
})

