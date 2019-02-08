const jwt = require('jsonwebtoken')

//VerifyTokenMiddelware
const verifyToken = (req, res, next) => {

    //get Auth HeaderValue
    
    const access_token = req.headers['x-access-token']
    if (access_token !== 'undefined') {
        //Format Of Token
        //Authorization : <Token>

        req.token = access_token

        jwt.verify(access_token, 'SecretKeyHere', (err, decoded) => {
            if (err) {
                res.json({
                    err
                })
            } else {
                req.userData = decoded
                next()
            }
        })
    } else {
        //Forbiden
        res.sendStatus(403)
    }
}

module.exports = verifyToken