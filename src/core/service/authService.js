import jwt from 'jsonwebtoken'
const { sign, verify } = jwt

function commonAuthentication(req, res, next) {
    const token = req.headers['x-access-token']
    verify(token, 'SECRET', (err, decoded) => {
        if (err)
            return res.status(401).end()
        req._id = decoded._id
        req.login_type = decoded.login_type
        next();
    });
}

function adminAuthentication(req, res, next) {
    const token = req.headers['x-access-token']
    verify(token, 'SECRET', (err, decoded) => {
        if (err || decoded.login_type !== 'admin')
            return res.status(401).end()
        req._id = decoded._id
        req.login_type = decoded.login_type
        next();
    });
}

function token(_id, login_type) {
    return sign({_id: _id, login_type: login_type}, 'SECRET', {expiresIn: 300})
}

export default {
    commonAuthentication,
    adminAuthentication,
    token
}