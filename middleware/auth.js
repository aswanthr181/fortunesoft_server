const jwt = require('jsonwebtoken')

const verifyToken = async (req, res, next) => {
    let token = req.header("Authorization")
    try {
        if (!token) {
            return res.status(404).json({ message: "authorization failed: no token provided" })
        }
        if (token.startsWith("Bearer ")) {
            token = token.slice(7, token.length).trimLeft()
            console.log(token);
            if (token === 'fs1234') {
                next();
            } else {
                return res.status(401).json({ message: "Authorization failed: invalid token" });
            }
        } else {
            return res.status(401).json({ message: "Authorization failed: invalid token format" });
        }
    } catch (error) {
        return res
            .status(404)
            .json({ message: "Authentication failed: invalid token." });
    }
}

module.exports = {
    verifyToken
}