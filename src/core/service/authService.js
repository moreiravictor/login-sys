import jwt from 'jsonwebtoken'
import userService from './userService.js';
const { sign, verify } = jwt

function commonAuthentication(req, res, next) {
    const token = req.headers['x-access-token']
    verify(token, 'SECRET', async (err, decoded) => {
        const invalid_token = await isBlackListed(token, decoded._id)
        if (err || invalid_token)
            return res.status(401).end()
        req._id = decoded._id
        req.login_type = decoded.login_type
        next();
    });
}

function adminAuthentication(req, res, next) {
    const token = req.headers['x-access-token']
    verify(token, 'SECRET', async (err, decoded) => {
        const invalid_token = await isBlackListed(token, decoded._id)
        if (err || decoded.login_type !== 'admin' || invalid_token)
            return res.status(401).end()
        req._id = decoded._id
        req.login_type = decoded.login_type
        next();
    });
}

function token(_id, login_type) {
    return sign({_id: _id, login_type: login_type}, 'SECRET', {expiresIn: 300})
}

async function isBlackListed(generated, user_id) {
    const  black_listed = await userService.blackListedTokens(user_id)
    return black_listed.some(token => token.token === generated)
}

export default {
    commonAuthentication,
    adminAuthentication,
    token
}