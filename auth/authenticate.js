const jwt = require("jsonwebtoken");

const { JWT_SECRET } = process.env;

const createToken = user => {
    const token = jwt.sign(user, JWT_SECRET);
    return token;
};

function authenticate(req, res, next) {
    const token = req.get("Authorization");

    if (token) {
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err) return res.status(401).json(err);

            req.decoded = decoded;

            next();
        });
    } else {
        return res.status(401).json({
            error: "No token provided, must be set on the Authorization Header",
        });
    }
}

module.exports = {
    authenticate,
    createToken
};
